import NavIndex from "../../component/NavIndex";
import { validateFormSchema } from "../../utils/formValidation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router";
import { RiArrowLeftSLine, RiCloseLine, RiMenuLine } from "@remixicon/react";
import { useState } from "react";


export default function NewTak() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(validateFormSchema),
  });
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    navigate("/home");
  };

  const [sideBarOpen, setSidebarOpen] = useState(false)

  const toggleBarOpen = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div>
    <aside className="w-64 bg-base-200 hidden lg:block">
    <NavIndex />
    </aside>
      <div className="container mx-auto p-8 mt-4  lg:mt-20 ">
     {/* mobile viewing */}
            <div className="relative">
            <img src="/public/logo-cQYmEuE8.svg" alt="logo" className="block lg:hidden"/>
              <button
                className="lg:hidden absolute top-4 right-4 z-50"
                onClick={toggleBarOpen}
              >
                {sideBarOpen ? <RiCloseLine /> : <RiMenuLine />}
              </button>
              {/* side bar */}
              <div
                className={`fixed top-0 left-0 z-50 h-full w-64 bg-base-200 transform transition-transform duration-300 ease-in-out lg:hidden ${
                  sideBarOpen ? "translate-x-0" : "-translate-x-full"
                }`}
              >
                <NavIndex />
              </div>
            </div>
        {/* text with arrow button */}
        <div className="relative p-8">
          <h1 className="font-semibold text-xl">New Task</h1>
          <button
            type="button"
            className="absolute inset-x-0 inset-y-0 right-20 border-0 cursor-pointer hover:-translate-x-1 transition-transform duration-200 "
            onClick={() => navigate("/home")}
          >
            <RiArrowLeftSLine />
          </button>
        </div>
        {/* form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* title field */}
          <div>
            <fieldset className="fieldset bg-base-200 p-4 rounded-lg">
              <legend className="fieldset-legend text-lg text-gray-500">
                Task title
              </legend>
              <input
                type="text"
                className="input w-full "
                placeholder="Enter task title"
                {...register("title")}
              />
            </fieldset>
            {errors.title?.message && (
              <span className="text-xs text-red-500">
                {errors.title?.message}
              </span>
            )}
          </div>
          {/*description text-area */}
          <div>
            <fieldset className="fieldset bg-base-200 p-4 rounded-lg">
              <legend className="fieldset-legend text-lg text-gray-500">
                Description
              </legend>
              <textarea
                placeholder="Describe task"
                className="textarea  w-full h-40"
                {...register("description")}
              ></textarea>
            </fieldset>
            {errors.description?.message && (
              <span className="text-xs text-red-500">
                {errors.description?.message}
              </span>
            )}
          </div>
          {/* select a tag*/}
          <div>
            <fieldset className="fieldset bg-base-200 p-4 rounded-lg">
              <legend className="fieldset-legend text-lg text-gray-500">
                Tags
              </legend>
              <select
                defaultValue="" {...register("tag")}
                className="select w-full"
                
              >
                <option value="" disabled>
                  Select a tag
                </option>
                <option value={"urgent"}>Urgent</option>
                <option value={"important"}>Important</option>
              </select>
            </fieldset>
            {errors.tag?.message && (
              <span className="text-xs text-red-500">
                {errors.tag?.message}
              </span>
            )}
          </div>
          <button
            className="btn btn-lg bg-[#974FD0] text-white w-full mt-8"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Done"}
          </button>
        </form>
      </div>
    </div>
  );
}
