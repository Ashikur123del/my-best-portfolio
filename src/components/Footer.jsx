
const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-300 text-base-content rounded">
            <aside>
                <p className="font-medium text-lg">
                    {"\u00A9"} {new Date().getFullYear()} Md. Ashik. Built with
                    <span className="text-secondary font-bold mx-1">React</span>
                    {"&"} <span className="text-emerald-500 font-bold mx-1">Tailwind CSS</span>
                </p>
            </aside>
        </footer>
    );
};

export default Footer;
