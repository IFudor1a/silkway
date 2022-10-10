import React from 'react';
import '../Styles/ProfileUpload.scss';
import {DOCIcon, FolderIcon, JPEGIcon, PDFIcon, PNGIcon, RetryIcon} from "../Materials/SVG";

const ProfileUpload = () => {
    return (
        <div className='ProfileUpload'>
            <div className='ProfileUpload_Header'>
                <div className='title'>
                    Добавить товар
                </div>
                <button>
                    Добавить товар
                </button>
            </div>

            <UploadRow/>
        </div>
    );
};

const UploadRow = () => {
    return (
        <div className='UploadRow'>
            <UploadForm/>
            <UploadFile/>
        </div>
    )
}

export default ProfileUpload;

const UploadForm = () => {
    return (
        <div className='UploadForm'>
           <form>
               <label>Название товара</label>
               <input type='text' placeholder='Название товара'/>

               <label>Категория товара</label>
               <input type='text' placeholder='Категория товара'/>

               <label>Цена за штуку</label>
               <input type='text' placeholder='Цена за штуку'/>

               <div className='Colors'>
                   <div className='color'>
                       <div className='option' >Цвет 1:</div>
                       <div className='colorbox' style={{backgroundColor: '#76777E'}}/>
                   </div>
                   <div className='color'>
                       <div className='option' >Цвет 2:</div>
                       <div className='colorbox' style={{backgroundColor: '#FF9B9B'}}/>
                   </div>
                   <div className='color'>
                       <div className='option' >Цвет 3:</div>
                       <div className='colorbox' style={{backgroundColor: '#FFD699'}}/>
                   </div>
               </div>

               <label>Описание</label>
               <textarea placeholder='Описание'/>
               <label>Дополнительная информация</label>
               <textarea placeholder='Дополнительная информация'/>
           </form>
        </div>
    )
}

const UploadFile = () => {
    return (
        <div className='UploadFile'>
            <div className='title'>
                Upload Your File
            </div>
            <div className='subtitle'>
                Select the following format
                PNG,JPEG,DOCX,PDF
            </div>
            <div className='UploadFile_DragDrop'>
                <div>
                    {FolderIcon}
                </div>
                <div className='title'><span>Drag</span> drop your file here or <span>Browse</span></div>
            </div>
            <UploadFile_uploaded/>
        </div>
    )
}

const UploadFile_uploaded = () => {
    return (
        <div className='UploadFile_uploaded'>
            <div className='title'>
                Uploading Files
            </div>
            <div className='ProgressBar'>
                <div className='logo'>
                    {PDFIcon}
                </div>
                <div className='info'>
                    <div className='title'>
                        Resume.pdf
                        <a href='#'>Delete</a>
                    </div>
                    <div className='progress' style={{border: '5px solid #FF0606'}}>

                    </div>
                </div>
            </div>
            <div className='ProgressBar'>
                <div className='logo'>
                    {PNGIcon}
                </div>
                <div className='info'>
                    <div className='title'>
                        Resume.pdf
                        <a href='#'>Delete</a>
                    </div>
                    <div className='progress' style={{border: '5px solid #00BCD4'}}>

                    </div>
                </div>
            </div>
            <div className='ProgressBar'>
                <div className='logo'>
                    {JPEGIcon}
                </div>
                <div className='info'>
                    <div className='title'>
                        Resume.pdf
                        <a href='#'>Delete</a>
                    </div>
                    <div className='progress' style={{border: '5px solid #4CAF50'}}>

                    </div>
                </div>
            </div>
            <div className='ProgressBar'>
                <div className='logo'>
                    {DOCIcon}
                </div>
                <div className='info'>
                    <div className='title'>
                        Resume.pdf
                        <a href='#'>{RetryIcon} Retry</a>
                    </div>
                    <div className='progress' style={{border: '5px solid #EEF3F8'}}>

                    </div>
                </div>
            </div>
        </div>
    )
}
