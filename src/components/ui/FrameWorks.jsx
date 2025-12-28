import { OrbitingCircles } from "./OrbitingCircles"

export function FrameWorks() {
    const skills = ["auth0","blazor","csharp","css3","react",
        "tailwindcss","gsap","wordpress","git","mongodb","nodejs",
        "html5","visualstudiocode","stripe","javascript","threejs"
    ];
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
      <OrbitingCircles iconSize={40}>
       {skills.map((item)=>(
        <img src={`assets/logos/${item}.svg`} />
       
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
        {skills.map((item)=>(
        <img src={`assets/logos/${item}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  )
}

