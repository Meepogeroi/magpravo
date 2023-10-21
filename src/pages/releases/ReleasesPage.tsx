import './ReleasesPage.css'

const ReleasesPage = () => {

    const url = "http://localhost:5173/pdf/Методичка.pdf"

    return (
        <>
            <div className="header">
                <hr />
                <p className="title">Выпуски</p>
                <hr />
            </div>

            <div className="pdf-container">
                <embed src={url} className='pdf' />
            </div>
        </>
    )
}

export default ReleasesPage