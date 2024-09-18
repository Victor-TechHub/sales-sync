const SideDisplay = () => {
  return (
    <div className="flex-1 h-dvh bg-stone-100 hidden md:flex">
      <video className="h-dvh object-cover" loop muted autoPlay>
        <source src="/sales-sync-vid.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default SideDisplay;
