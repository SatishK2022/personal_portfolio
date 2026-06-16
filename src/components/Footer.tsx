export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08] py-8">
      <div className="max-w-[860px] mx-auto px-6 md:px-8 flex items-center justify-between flex-wrap gap-3">
        <p className="text-[0.8rem] text-[#52525b]">
          © {year}{" "}
          <span className="text-[#71717a] font-medium">Satish Kumar</span>
          . All rights reserved.
        </p>
        <p className="text-[0.8rem] text-[#52525b]">
          Built with{" "}
          <span className="text-[#f59e0b]">❤️</span>
          {" By "}
          <span className="text-[#f59e0b]">Satish Kumar</span>
        </p>
      </div>
    </footer>
  );
}
