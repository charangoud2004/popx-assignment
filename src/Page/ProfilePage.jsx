import man from "../assets/man.png";

export const ProfilePage = () => {
  const email = localStorage.getItem("email");
  const name = localStorage.getItem("name", "User");

  const safeName = name && name !== "undefined" ? name : "User";
  return (
    <div className="min-h-screen shadow-lg bg-gray-200/80">
      <div className="h-[70px] bg-white px-8 py-4">
        <h1 className="capitalize text-gray-600 text-2xl font-medium ">
          account settings
        </h1>
      </div>
      <div className="flex gap-4 px-[38px] py-4">
        <div className="relative">
          <i className="bi bi-camera text-blue-800 absolute right-0 bottom-0 text-2xl "></i>
          <img src={man} alt="" className="w-20" />
        </div>
        <div>
          <p className="capitalize  font-medium">
            <strong>{safeName}</strong>
          </p>
          <p className="capitalize  font-medium text-gray-600">{email}</p>
        </div>
      </div>
      <p className="px-8 text-gray-600">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias expedita
        maiores corrupti molestias explicabo, eos, corporis sunt minima
        reprehenderit quaerat fugit at! Dolore fugit iste expedita, eos impedit
        modi consequuntur.
      </p>
      
    </div>
  );
};
