import { FormData } from "../components/FormData";

export const Register = () => {
  return (
    <div className="min-h-screen shadow-lg px-4 flex flex-col">
      <FormData
        isregister={true}
        Buttontext="Register"
        heading="create your popx account"
      />
    </div>
  );
};
