import { useState } from "react";
import { IFormCard } from "../../constants/constants";
import FormCard from "./formCard";
import { Input, SelectInput } from "./inputs";
import { useForm } from "react-hook-form";
import { country_list } from "./countyList";
import { PopUP } from "../popUp";
import { addUserCard } from "../../store/formSlice";
import { useAppDispatch, useAppSelector } from "../../store/reduxHooks";

const FormLayout = () => {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<IFormCard>();

  const dispatch = useAppDispatch();
  const cards = useAppSelector((state) => state.userCards.userCards);
  const [popUp, setPopUp] = useState(false);

  const onSubmit = (data: IFormCard) => {
    if (!data.file) return;
    const file = data.file[0] as Blob;
    if (
      file.type == "image/jpeg" ||
      file.type == "image/jpg" ||
      file.type == "image/png"
    ) {
      data.id = cards.length;
      delete data.file;
      data.image = URL.createObjectURL(file);
      dispatch(addUserCard(data));
      setPopUp(true);
      reset();
    } else {
      setError("file", {
        type: "file",
        message: "Only images are valid.",
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <Input
          label="First Name"
          name="firstName"
          register={{
            ...register("firstName", {
              required: "Is required",
              pattern: {
                value: /[A-Za-z]{3}/,
                message: "Needs to be written in latin letters",
              },
            }),
          }}
          type="text"
          error={Boolean(errors["firstName"]?.message)}
          helperText={errors.firstName?.message?.toString()}
        />
        <Input
          label="Second Name"
          name="secondName"
          register={{
            ...register("secondName", {
              required: "Is required",
              pattern: {
                value: /[A-Za-z]{3}/,
                message: "Needs to be written in latin letters",
              },
            }),
          }}
          type="text"
          error={Boolean(errors["secondName"]?.message)}
          helperText={errors.secondName?.message?.toString()}
        />
        <Input
          label="Your birthday"
          name="birthday"
          register={{
            ...register("birthday", {
              required: "Is required",
            }),
          }}
          type="date"
          error={Boolean(errors["birthday"]?.message)}
          helperText={errors.birthday?.message?.toString()}
        />
        <div>
          <Input
            label="Female"
            name="sex"
            register={{
              ...register("sex"),
            }}
            type="radio"
            value="female"
          />
          <Input
            label="Male"
            name="sex"
            register={{
              ...register("sex", {
                required: "Is required",
              }),
            }}
            type="radio"
            error={Boolean(errors["sex"]?.message)}
            helperText={errors.sex?.message?.toString()}
            value="male"
          />
        </div>
        <div>
          <Input
            label="I consent to my personal data"
            name="agree"
            register={{
              ...register("agree", {
                required: "Is required",
              }),
            }}
            type="checkbox"
            error={Boolean(errors["agree"]?.message)}
            helperText={errors.agree?.message?.toString()}
          />
        </div>
        <div>
          <Input
            label="Upload an image"
            name="file"
            register={{
              ...register("file", {
                required: "Is required",
              }),
            }}
            type="file"
            error={Boolean(errors["file"]?.message)}
            helperText={errors.file?.message?.toString()}
          />
        </div>
        <SelectInput
          label="Choose your country"
          name="country"
          register={{
            ...register("country", {
              required: "Is required",
            }),
          }}
          error={Boolean(errors["country"]?.message)}
          helperText={errors.birthday?.message?.toString()}
          country_list={country_list}
        />
        <button>Submit</button>
      </form>
      <ul className="product-list list card-mode">
        {cards
          ? cards.map((item) => <FormCard key={item.id} {...item} />)
          : null}
      </ul>
      <PopUP status={popUp} setPopUP={setPopUp}>
        <p>User has been successfully created</p>
      </PopUP>
    </>
  );
};

export default FormLayout;
