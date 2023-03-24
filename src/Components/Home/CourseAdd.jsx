export default function CourseAdd() {
//what is redux toolkit? 
  return (
    <div>
      <label for="my-modal-4" class="btn">
        Add Course  
      </label>
      <input type="checkbox" id="my-modal-4" class="modal-toggle" />
      <label for="my-modal-4" class="modal cursor-pointer">
        <label class="modal-box relative" for="">
          <h3 class="text-lg font-bold">
            Congratulations random Internet user!
          </h3>
          <input
            type="email"
            class="input mt-1 block w-full border-gray-300 bg-white py-2 px-4 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
          <p class="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!v
          </p>
        </label>
      </label>
    </div>
  );
}
