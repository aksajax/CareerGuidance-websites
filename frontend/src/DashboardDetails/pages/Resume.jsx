import { useState } from "react";
import html2pdf from "html2pdf.js";
import {
User,
Mail,
Phone,
Linkedin,
Github,
Briefcase,
GraduationCap,
Star,
FileText
} from "lucide-react";

export default function Resume(){

const [step,setStep]=useState(1)

const [data,setData]=useState({
name:"",
email:"",
phone:"",
linkedin:"",
github:"",
company:"",
role:"",
experience:"",
college:"",
degree:"",
year:"",
skills:"",
summary:""
})

const handleChange=(e)=>{
setData({...data,[e.target.name]:e.target.value})
}

const next=()=>setStep(step+1)
const prev=()=>setStep(step-1)

const progress=(step/5)*100

const downloadPDF=()=>{
const element=document.getElementById("resumePreview")
html2pdf().from(element).save("resume.pdf")
}

const Input=({icon,name,placeholder})=>(
<div className="relative">
<span className="absolute left-3 top-3 text-gray-400">{icon}</span>
<input
name={name}
placeholder={placeholder}
value={data[name]}
onChange={handleChange}
className="
w-full
pl-10
pr-4
py-3
border
rounded-xl
bg-gray-50
focus:bg-white
focus:border-blue-500
focus:ring-2
focus:ring-blue-200
outline-none
transition
"
/>
</div>
)

return(

<div className="min-h-screen bg-gray-100">

{/* HEADER */}

<div className="bg-white shadow flex justify-between items-center px-10 py-4">

<h1 className="text-2xl font-bold">
Create Resume
</h1>

<button
onClick={downloadPDF}
className="
bg-green-600
hover:bg-green-700
text-white
px-6
py-2
rounded-xl
shadow
transition
"
>
Download Resume
</button>

</div>


{/* PROGRESS BAR */}

<div className="h-2 bg-gray-200">

<div
className="h-2 bg-blue-600 transition-all"
style={{width:`${progress}%`}}
></div>

</div>


<div className="grid grid-cols-12 gap-6 p-8">


{/* SIDEBAR */}

<div className="col-span-2 bg-white p-6 rounded-xl shadow space-y-4">

<p className={step===1?"text-blue-600 font-semibold":""}>
Contact
</p>

<p className={step===2?"text-blue-600 font-semibold":""}>
Experience
</p>

<p className={step===3?"text-blue-600 font-semibold":""}>
Education
</p>

<p className={step===4?"text-blue-600 font-semibold":""}>
Skills
</p>

<p className={step===5?"text-blue-600 font-semibold":""}>
Summary
</p>

</div>



{/* FORM */}

<div className="col-span-6 bg-white p-8 rounded-xl shadow space-y-4">


{step===1 &&(

<>

<h2 className="text-xl font-semibold mb-4">
Contact Information
</h2>

<Input icon={<User size={18}/>} name="name" placeholder="Full Name"/>

<Input icon={<Mail size={18}/>} name="email" placeholder="Email Address"/>

<Input icon={<Phone size={18}/>} name="phone" placeholder="Phone Number"/>

<Input icon={<Linkedin size={18}/>} name="linkedin" placeholder="LinkedIn Profile"/>

<Input icon={<Github size={18}/>} name="github" placeholder="GitHub Profile"/>

</>

)}



{step===2 &&(

<>

<h2 className="text-xl font-semibold mb-4">
Work Experience
</h2>

<Input icon={<Briefcase size={18}/>} name="company" placeholder="Company Name"/>

<Input icon={<Briefcase size={18}/>} name="role" placeholder="Role"/>

<textarea
name="experience"
placeholder="Describe your work"
onChange={handleChange}
className="
w-full
p-3
border
rounded-xl
bg-gray-50
focus:bg-white
focus:ring-2
focus:ring-blue-200
outline-none
"
/>

</>

)}



{step===3 &&(

<>

<h2 className="text-xl font-semibold mb-4">
Education
</h2>

<Input icon={<GraduationCap size={18}/>} name="college" placeholder="College Name"/>

<Input icon={<GraduationCap size={18}/>} name="degree" placeholder="Degree"/>

<Input icon={<GraduationCap size={18}/>} name="year" placeholder="Year"/>

</>

)}



{step===4 &&(

<>

<h2 className="text-xl font-semibold mb-4">
Skills
</h2>

<Input icon={<Star size={18}/>} name="skills" placeholder="React, Node, MongoDB"/>

</>

)}



{step===5 &&(

<>

<h2 className="text-xl font-semibold mb-4">
Professional Summary
</h2>

<textarea
name="summary"
placeholder="Write summary"
onChange={handleChange}
className="
w-full
p-3
border
rounded-xl
bg-gray-50
focus:bg-white
focus:ring-2
focus:ring-blue-200
outline-none
"
/>

</>

)}



{/* BUTTONS */}

<div className="flex justify-between pt-6">

{step>1 &&(

<button
onClick={prev}
className="
px-6
py-2
bg-gray-200
hover:bg-gray-300
rounded-xl
transition
"
>
← Back
</button>

)}

{step<5 &&(

<button
onClick={next}
className="
px-6
py-2
bg-blue-600
hover:bg-blue-700
text-white
rounded-xl
transition
"
>
Next →
</button>

)}

</div>

</div>



{/* RESUME PREVIEW */}

<div
id="resumePreview"
className="col-span-4 bg-white p-8 rounded-xl shadow border"
>

<h1 className="text-3xl font-bold">
{data.name}
</h1>

<p className="text-gray-600 mt-1">
{data.email} • {data.phone}
</p>

<p className="text-sm text-gray-500">
{data.linkedin}
</p>


<hr className="my-4"/>


<h2 className="font-semibold text-lg">
Summary
</h2>

<p className="text-sm text-gray-600">
{data.summary}
</p>


<h2 className="font-semibold text-lg mt-4">
Skills
</h2>

<p className="text-sm text-gray-600">
{data.skills}
</p>


<h2 className="font-semibold text-lg mt-4">
Experience
</h2>

<p className="text-sm font-semibold">
{data.role} - {data.company}
</p>

<p className="text-sm text-gray-600">
{data.experience}
</p>


<h2 className="font-semibold text-lg mt-4">
Education
</h2>

<p className="text-sm">
{data.degree} - {data.college}
</p>

<p className="text-sm">
{data.year}
</p>

</div>

</div>

</div>

)

}