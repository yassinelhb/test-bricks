const Filter = () => {
  return (<div className="flex justify-between sm:flex-col mb-7">
    <div className="flex">
      <div className="relative flex-1 hover:shadow-md transition ease-in-out delay-50 hover:-translate-y-1 rounded-xl">
        <input type="text" className="w-80 h-10.5 rounded-xl bg-white text-dark text-[15px] leading-[18.29px] pl-9 sm:w-full placeholder:text-dark outline-none" placeholder="Ville, immeuble..."/>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-4 top-3.5">
          <path d="M13.754 12.5838L11.0633 9.8931C11.8788 8.8256 12.326 7.53079 12.3262 6.16447C12.3262 4.51793 11.6849 2.96982 10.5205 1.80555C9.35619 0.64128 7.80828 0 6.16154 0C4.51499 0 2.96688 0.64128 1.80261 1.80555C-0.600871 4.20924 -0.600871 8.12011 1.80261 10.5234C2.96688 11.6879 4.51499 12.3291 6.16154 12.3291C7.52785 12.329 8.82267 11.8817 9.89017 11.0663L12.5808 13.7569C12.7427 13.919 12.9551 14 13.1674 14C13.3797 14 13.5922 13.919 13.754 13.7569C14.0781 13.4331 14.0781 12.9076 13.754 12.5838ZM2.9758 9.35021C1.21926 7.59368 1.21947 4.73547 2.9758 2.97873C3.82672 2.12801 4.95817 1.65931 6.16154 1.65931C7.3651 1.65931 8.49635 2.12801 9.34728 2.97873C10.1982 3.82965 10.6669 4.96111 10.6669 6.16447C10.6669 7.36804 10.1982 8.49929 9.34728 9.35021C8.49635 10.2011 7.3651 10.6698 6.16154 10.6698C4.95817 10.6698 3.82672 10.2011 2.9758 9.35021Z" fill="#0A2337"/>
        </svg>
      </div>
      <span className="hidden sm:flex justify-center items-center bg-white rounded-xl cursor-pointer text-[15px] leading-[18.29px] text-dark ml-1.5 w-18.5 h-10.5">
        Liste{" "}
        <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1.5">
          <path d="M4.92851 4.93032L9.44464 0.252903C9.49228 0.203387 9.49725 0.139194 9.45864 0.0862903C9.41957 0.0332258 9.3428 0 9.2588 0L0.226541 0C0.142541 0 0.0655403 0.0332258 0.0264759 0.0862903C0.00931454 0.109839 0.000734329 0.135645 0.000734329 0.16129C0.000734329 0.193387 0.0142822 0.225323 0.0407019 0.252903L4.55683 4.93032C4.59906 4.97403 4.66838 5 4.74267 5C4.81696 5 4.88628 4.97387 4.92851 4.93032Z" fill="#0A2337"/>
        </svg>
      </span>
    </div>
    <div className="sm:mt-3">
      <button className="sm:text-sm text-[15px] font-semibold rounded-xl min-h-[42px] min-w-[138px]  text-primary bg-white  hover:shadow-md transition ease-in-out delay-50 hover:-translate-y-1">
        Tous
        <span className="sm:hidden"> les biens</span>
      </button>
      <button className="sm:text-sm text-[15px] font-semibold rounded-xl min-h-[42px] min-w-[138px]  bg-opacity-0 text-gray-400 transition ease-in-out delay-50 hover:-translate-y-1 ">
        Mes biens
      </button>
      <button className="sm:text-sm text-[15px] font-semibold rounded-xl min-h-[42px] min-w-[138px]  bg-opacity-0 text-gray-400  transition ease-in-out delay-50 hover:-translate-y-1">
        Mes ventes
      </button>
    </div>
  </div>);
};

export default Filter;
