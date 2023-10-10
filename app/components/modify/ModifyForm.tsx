import React, { useEffect, useState } from 'react'
import Inputfield from '../global/InputField';
import FileInput from '../global/FileInput';
import BnbButton from '../global/BnbButton';
import { getUserID } from '../../global/authmanager';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';


function ModifyForm() {
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState<number | null>(null);
    const [itemState, setItemState] = useState("");
    const [file, setFile] = useState<File | null>(null);

    const [canContinue, setCanContinue] = useState(false);
    useEffect(() => {         
        setCanContinue(
            title.length > 0 && 
            description.length > 1 && 
            price != null && 
            itemState.length > 0 && 
            file != null)
    }, [itemState, title, description, price, file])

    return (
        <div className='flex flex-col p-5 h-full justify-center gap-5 '>
            <div className='flex flex-col'>
                <h1>
                    Titre
                </h1>
                <Inputfield onChange={(x) => { setTitle(x); }} value={title}/>
            </div>
            
            <div className='flex flex-col'>
                <h1>
                    Description
                </h1>
                <Inputfield onChange={(x) => { setDescription(x); }} value={description}/>
            </div>
            
            <div className='flex flex-col'>
                <h1>
                    Prix
                </h1>
                <Inputfield value={ (price ?? "").toString() } onChange={(x) => { 
                    const numb = Number(x);
                    if(isNaN(numb)) setPrice(null);
                    else setPrice(numb); 
                }}/>
            </div>
                       
            <div className='flex flex-col' > 
                <h1>
                    État de l'item
                </h1>
                <Inputfield value={ itemState } onChange={(x) => { setItemState(x) }}/>
            </div>

            <div>
                <FileInput successText='Fichier téléversé !' text='Téléverser image' onChange={(file) => {
                    if(file != null){ 
                        setFile(file);
                    }
                }} />
            </div>

            <div className={canContinue ? 'block' : 'hidden'}>
                <BnbButton primary={true} text='Mettre en vente' onClick={async () => {
                    var formdata = new FormData()
                    if(file == null || price == null) return;
                    formdata.append('Name', title);
                    formdata.append('Description', description);
                    formdata.append('Price', price.toString());
                    formdata.append('ItemState', itemState);
                    formdata.append('Image', file);
                    formdata.append('user', getUserID() ?? "");

                    console.log(formdata);
                    const res = await fetch("/api/sell" , {
                        method: "POST",
                        body: formdata
                    });
                    const ok = (await res.json()).ok
                    if(ok == null || !ok){ 
                        toast.error("Un problème est survenu. Veuillez réessayer plus tard.");
                    }
                    else{ 
                        router.push("/");
                        router.refresh();
                    }

                }}/>
            </div>
        </div>
    )
}

export default ModifyForm