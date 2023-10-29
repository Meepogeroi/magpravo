import { useState } from 'react'
import './ReleasesPage.modules.css'

const ReleasesPage = () => {

    const [pdfState, setPdfState] = useState("Социология и Право Окт 2023")
    const url = "./pdf/" + pdfState + ".pdf"

    const handleButtonClick = (pdfName: string): void => {
        setPdfState(pdfName)
    }

    return (
        <>
            <div className="header">
                <hr />
                <p className="title">Публикации</p>
                <hr />
            </div>

            <div className='content'>
                <div className="pdf-container">
                    <embed src={url} className='pdf' />
                </div>

                <div className='rel-list'>
                    <button className='rel-button' onClick={() => handleButtonClick("Социология и Право Окт 2023")}>Выпуск Октябрь 2023</button>
                </div>
            </div>
        </>
    )
}

export default ReleasesPage

