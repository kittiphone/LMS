import { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CourseAdd(props) {
  const [modalOpen, setModalOpen] = useState(false);
  const defaultValues = {
    course: "",
    category: "",
    imageUrl: "",
    preview: "",
  };

  const validationSchema = Yup.object().shape({
    course: Yup.string().required("Course name is required"),
    category: Yup.string().required("Category is required"),
    imageUrl: Yup.string()
      .url("Invalid image URL")
      .required("Image URL is required"),
    preview: Yup.string().required("Preview URL is required"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues,
    resolver: yupResolver(validationSchema),
  });


  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/course/courseAdd",
        data
      );
      const { status } = response.data;
      if (status === "ok") {
        toast.success("Course added successfully!");
        // Call the onAddCourse prop to update the courses state
        if (typeof props.onAddCourse === "function") {
          props.onAddCourse();
        }
        if (props.coursesContainerRef.current) {
          props.coursesContainerRef.current.scrollIntoView({ behavior: "smooth" });
        }
        setModalOpen(false);
      }
      reset(defaultValues);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div>
   <ToastContainer />
      <label
        htmlFor="my-modal-5"
        className="btn bg-gradient-to-br border-none from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium"
      >
        Add Course
      </label>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" checked={modalOpen} onChange={() => setModalOpen(!modalOpen)} />
      <label htmlFor="my-modal-5" className="modal cursor-pointer over" >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="modal-box relative w-10000"
          noValidate
        >
          <h3 className="text-lg font-bold">Add Course</h3>
          <label className="block text-sm font-medium text-gray-700 pt-5">
            Course
          </label>

          <div className="space-y-4">
            <input
              type="text"
              {...register("course")}
              className="input mt-1 block w-full border-gray-300 bg-white py-2 px-4 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
            {errors.course && (
              <span className="text-red-500">{errors.course.message}</span>
            )}
            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <input
              type="text"
              {...register("category")}
              className="input mt-1 block w-full border-gray-300 bg-white py-2 px-4 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
            {errors.category && (
              <span className="text-red-500">{errors.category.message}</span>
            )}
            <label className="block text-sm font-medium text-gray-700">
              ImageUrl
            </label>
            <input
              type="text"
              {...register("imageUrl")}
              className="input mt-1 block w-full border-gray-300 bg-white py-2 px-4 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
            {errors.imageUrl && (
              <span className="text-red-500">{errors.imageUrl.message}</span>
            )}
            <label className="block text-sm font-medium text-gray-700">
              Preview
            </label>
            <input
              type="text"
              {...register("preview")}
              className="input mt-1 block w-full border-gray-300 bg-white py-2 px-4 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
            {errors.preview && (
              <span className="text-red-500">{errors.preview.message}</span>
            )}
          </div>

          <p className="py-4 flex justify-end">
            <button type="submit" className="btn btn-primary">
              Add Course
            </button>
          </p>
        </form>
      </label>
    </div>
  );
}
