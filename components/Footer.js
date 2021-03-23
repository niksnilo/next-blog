const Footer = () => {
  return (
    <footer className="flex justify-center py-10 bg-blue-500 text-white items-center">
      <div className="flex justify-around items-center w-4/5">
        <div className="flex flex-col">
          <p className="text-xl font-bold underline">Support</p>
          <ul className="leading-9 tracking-wider text-lg">
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Documentation</a>
            </li>
            <li>
              <a href="#">Guide</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <p className="text-xl font-bold underline">Pages</p>
          <ul className="leading-9 tracking-wider text-lg">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Work</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <p className="text-xl font-bold">Subscribe to the newsletter</p>
          <p className="text-md tracking-wider text-lg my-2">
            The latest, sent to your email!
          </p>
          <div className="flex flex-row">
            <input
              type="email"
              name="email"
              placeholder="text@sample.com"
              className="p-3 rounded mr-2"
            />
            <a className="font-bold text-white bg-black rounded p-3">
              Suscribe
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
