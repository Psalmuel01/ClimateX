import { useStorageUpload, useContractWrite } from "@thirdweb-dev/react";
import { useContext, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { MdUpload } from "react-icons/md";
import { ContractContext } from "../../../contexts/ContractContext";

const AddImpact = ({ done }: { done: () => void }) => {
  const { daoContract } = useContext(ContractContext);
  // title, noOfImpact, _location, _description, _imageUrl
  const [file, setFile] = useState<File>();
  const [formData, setFormData] = useState({
    title: "",
    noOfImpact: "",
    _location: "",
    _description: "",
    _imageUrl: "",
  });

  const { mutateAsync: upload } = useStorageUpload();
  const { mutateAsync: addImpact, isLoading: impactLoading } = useContractWrite(
    daoContract,
    "createImpact"
  );

  const uploadToIpfs = async () => {
    toast.loading("Uploading...");
    const uploadUrl = await upload({
      data: [file],
      options: { uploadWithGatewayUrl: true, uploadWithoutDirectory: true },
    });
    toast.dismiss();
    setFormData({ ...formData, _imageUrl: uploadUrl[0] });
    setFile(undefined);
    toast.success("Uploaded successfully");
  };

  const handleFormCheck = useMemo(() => {
    if (
      formData.title.length > 3 &&
      formData.noOfImpact.length > 0 &&
      formData._description.length > 3 &&
      formData._location.length > 3 &&
      formData._imageUrl.length > 3
    )
      return false;

    return true;
  }, [formData]);

  const createImpact = async () => {
    toast.loading("Creating impact...");
    const tx = await addImpact({
      args: [
        formData.title,
        formData.noOfImpact,
        formData._location,
        formData._description,
        formData._imageUrl,
      ],
    });

    if (tx.receipt) {
      toast.dismiss();
      toast.success("Impact created successfully");
      setFormData({
        title: "",
        noOfImpact: "",
        _location: "",
        _description: "",
        _imageUrl: "",
      });
      setFile(undefined);
      if (done) done();
    }
  };

  return (
    <div className="grid gap-4 w-full max-w-md">
      <div className="form-item">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          placeholder="Enter title"
          name="title"
          id="title"
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          value={formData.title}
        />
      </div>

      <div className="form-item">
        <label htmlFor="description">Description</label>
        <textarea
          placeholder="Planted trees or Recycled bottles"
          name="description"
          id="description"
          onChange={(e) =>
            setFormData({ ...formData, _description: e.target.value })
          }
          value={formData._description}
          rows={1}
        />
      </div>

      <div className="form-item">
        <label htmlFor="noOfImpact">Number of Impacts</label>
        <input
          type="number"
          placeholder="Enter number of trees/bottles"
          name="noOfImpact"
          id="noOfImpact"
          min={0}
          onChange={(e) =>
            setFormData({ ...formData, noOfImpact: e.target.value })
          }
          value={formData.noOfImpact}
        />
        <label className="text-red-500/80">
          Impacts of less than 50 are not eligible to receive rewards
        </label>
      </div>

      <div className="form-item">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          placeholder="Enter location"
          name="location"
          id="location"
          onChange={(e) =>
            setFormData({ ...formData, _location: e.target.value })
          }
          value={formData._location}
        />
      </div>

      <div className="p-2 flex gap-4 text-xs items-center">
        <label htmlFor="image">
          <MdUpload size={40} className="p-2 rounded border" />
        </label>
        <input
          type="file"
          accept="image/*"
          id="image"
          name="image"
          onChange={(e) => setFile(e.target.files![0])}
          className="hidden"
        />
        <button
          onClick={uploadToIpfs}
          className="bg-[#E1FF99] disabled:cursor-not-allowed disabled:hover:bg-[#E1FF99]  disabled:hover:text-black  disabled:opacity-50 hover:bg-green-950 hover:text-white rounded-xl w-max  px-4 py-2 "
          disabled={!file}
        >
          Upload
        </button>

        {file ? (
          <p>Upload image to preview</p>
        ) : formData._imageUrl ? (
          <p>
            Image uploaded successfully, you can change by uploading a new one
          </p>
        ) : (
          <p>Choose an image</p>
        )}
      </div>

      <div className="w-full">
        {formData._imageUrl && (
          <div className="w-full h-56 overflow-hidden">
            <img
              src={formData._imageUrl}
              alt=""
              className={`w-full h-full ${file ? "opacity-10" : ""}`}
            />
          </div>
        )}
      </div>

      <button
        className="bg-[#E1FF99] disabled:opacity-50  disabled:hover:text-black  disabled:cursor-not-allowed disabled:hover:bg-[#E1FF99] hover:bg-green-950 hover:text-white rounded-xl w-full  px-4 py-2"
        disabled={handleFormCheck || impactLoading}
        onClick={createImpact}
      >
        Add Impact
      </button>
    </div>
  );
};

export default AddImpact;
