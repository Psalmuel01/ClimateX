import { useContractWrite, useStorageUpload } from "@thirdweb-dev/react";
import { useContext, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { MdUpload } from "react-icons/md";
import { ContractContext } from "../../../contexts/ContractContext";

const AddMarketplaceItem = ({ callBack }: { callBack: () => void }) => {
  const { marketplaceContract } = useContext(ContractContext);

  const [file, setFile] = useState<File>();
  const [formData, setFormData] = useState({
    _name: "",
    _description: "",
    _price: "",
    _image: "",
    available: "",
  });

  const { mutateAsync: upload } = useStorageUpload();
  const { mutateAsync: uploadProduct, isLoading: impactLoading } =
    useContractWrite(marketplaceContract, "uploadProduct");

  const uploadToIpfs = async () => {
    toast.loading("Uploading...");
    const uploadUrl = await upload({
      data: [file],
      options: { uploadWithGatewayUrl: true, uploadWithoutDirectory: true },
    });
    toast.dismiss();
    setFormData({ ...formData, _image: uploadUrl[0] });
    setFile(undefined);
    toast.success("Uploaded successfully");
  };

  const handleFormCheck = useMemo(() => {
    if (
      formData._name.length > 3 &&
      formData._description.length > 3 &&
      formData._price.length > 0.01 &&
      formData._image.length > 3 &&
      formData.available.length > 0
    )
      return false;

    return true;
  }, [formData]);

  const createImpact = async () => {
    toast.loading("Creating impact...");
    const tx = await uploadProduct({
      args: [
        formData._name,
        formData._description,
        Number(formData._price) * 10 ** 18,
        formData._image,
        formData.available,
      ],
    });

    if (tx.receipt) {
      toast.dismiss();
      toast.success("Impact created successfully");
      setFormData({
        _name: "",
        _description: "",
        _price: "",
        _image: "",
        available: "",
      });
      setFile(undefined);
      if (callBack) callBack();
    }
  };

  return (
    <div className="grid gap-4">
      <div className="form-item">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          placeholder="Enter Product Name"
          name="title"
          id="title"
          onChange={(e) => setFormData({ ...formData, _name: e.target.value })}
          value={formData._name}
        />
      </div>

      <div className="form-item">
        <label htmlFor="description">Description</label>
        <textarea
          placeholder="Enter description"
          name="description"
          id="description"
          onChange={(e) =>
            setFormData({ ...formData, _description: e.target.value })
          }
          value={formData._description}
          rows={5}
        />
      </div>

      <div className="form-item">
        <label htmlFor="price">Number of Impacts</label>
        <input
          type="number"
          placeholder="Enter Price e.g (0.0001)"
          name="price"
          id="price"
          min={0.01}
          step={0.01}
          onChange={(e) => setFormData({ ...formData, _price: e.target.value })}
          value={formData._price}
        />
      </div>

      <div className="form-item">
        <label htmlFor="price">Number of Impacts</label>
        <input
          type="number"
          placeholder="Number of Items"
          name="item"
          id="item"
          min={1}
          step={1}
          onChange={(e) =>
            setFormData({ ...formData, available: e.target.value })
          }
          value={formData.available}
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
        ) : formData._image ? (
          <p>
            Image uploaded successfully, you can change by uploading a new one
          </p>
        ) : (
          <p>Choose an image</p>
        )}
      </div>

      <div className="w-full">
        {formData._image && (
          <div className="w-full h-56 overflow-hidden">
            <img
              src={formData._image}
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

export default AddMarketplaceItem;
