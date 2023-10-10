import { useState } from "react";

interface FileInputProps {
    text:string,
    successText:string,
    onChange:(file:File | null | undefined) => void
}

function FileInput(props:FileInputProps) {
    
    const [hasFile, setHasFile] = useState(false);
    
    return ( 
        <div className="flex flex-row gap-5 items-center">
            <label htmlFor="file" className="w-44 text-center transition-all duration-400 ease-out cursor-pointer py-2 px-4 rounded-lg font-bold border-white border-2 
            hover:bg-white hover:text-black" > { props.text } </label>
            <input accept="image/*"  className="hidden" id='file' type="file" name="file" onChange={(evt) => { 
                const file = evt.target.files?.item(0);
                props.onChange(file); 
                if(file != null){
                    setHasFile(true);
                }
            }}/>
            <p className={`${hasFile ? "text-green-400 font-extrabold" : "hidden"}`}> { props.successText } </p>
        </div>
    )
}

export default FileInput