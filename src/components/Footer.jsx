import Cinema from "../assets/Cinema";

function Footer() {
  return (
    <footer >
      <div className="mx-auto max-w-full px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center sm:justify-start">
            <Cinema width="100" />
          </div>

          <div className="flex flex-col">
            <p className="mt-4 text-center text-sm">
              Made with ❤️ by Oscar Meneses
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
