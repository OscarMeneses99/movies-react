import DeviceIcon from "../assets/DeviceIcon.jsx";
function Footer() {
  return (
    <footer
      className="bg-white text-gray-600"
    >
      <div className="mx-auto max-w-full px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center sm:justify-start">
            <DeviceIcon />
          </div>

          <div className="flex flex-col md:flex-row">
            <p className="mt-4 text-center text-sm  lg:mt-0 lg:text-right">
              Copyright Oscar Meneses&copy;2023.
            </p>
            <p className="md:mt-4 mt-0 text-center text-sm lg:mt-0 lg:text-right">
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
