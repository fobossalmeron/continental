export function AddIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 800 800"
      fill="none"
      {...props}
    >
      <rect width="800" height="800" fill="#FCFCFD"/>
      <rect 
        x="130" 
        y="130" 
        width="540" 
        height="540" 
        rx="141" 
        stroke="currentColor" 
        strokeWidth="58"
      />
      <path 
        d="M400 251V550" 
        stroke="currentColor" 
        strokeWidth="58" 
        strokeLinecap="round"
      />
      <path 
        d="M550 400L251 400" 
        stroke="currentColor" 
        strokeWidth="58" 
        strokeLinecap="round"
      />
    </svg>
  );
}
