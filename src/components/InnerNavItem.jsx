const InnerNavItem = ({ innerNav }) => {
  return (
    <ul className="flex justify-center gap-30 pt-4 pb-8 md:px-8 items-stretch text-center">
      {innerNav.map((content) => (
        <li key={content.key} className="cursor-pointer">
          <h3 className="text-md mb-2">{content.title}</h3>
          <div className="space-y-[2px] text-gray-700 text-center text-sm">
            <p>{content.content}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default InnerNavItem;

// <ul className="flex justify-center gap-30 pt-4 pb-8 items-stretch">
//   <li>
//     <h3 className="text-md mb-2">Yeni C Serisi</h3>
//     <div className="space-y-[2px] text-gray-700 text-center text-sm">
//       <p>C-200</p>
//       <p>C-300</p>
//       <p>C-400</p>
//     </div>
//   </li>
// </ul>
