import 'bootstrap/dist/css/bootstrap.min.css';

export default function Education(){
    return (
        <div className="container edu-containter" id="Education">
            <div className='d-flex flex-column'>
                <h1 className='d-flex align-items-center justify-content-center education-title'>Education</h1>
                <div className='d-flex edu-div'>
                   <div className='school-card d-flex'>
                        <h1 className="school-name text-center">High School (2018 - 2021)</h1>
                        <div className='card rounded-5' style={{backgroundColor:'#51B7C7'}}>
                            <img
                                src='/Image/us.png'
                                className="card-img-top rounded-5"
                                alt="University Logo"
                            />
                            <div className='card-body p-2'>
                                <p className="card-text text-center">SMK Unggul Sakti Jambi</p>
                                <img id="logo-sk"src='/Image/logo-us.png'/>
                                <p className='card-text'><b>Multimedia</b></p>
                                <p className='card-text mt-1'><br/><b>Disipline | Teamwork | Editing Skills</b></p>
                            </div>
                        </div>
                    </div>
                    <div className='school-card d-flex'>
                        <h1 className="school-name text-center">University (2021 - Present)</h1>
                        <div className='card rounded-5' style={{backgroundColor:'#51B7C7'}}>
                            <img
                                src='/Image/umn.png'
                                className="card-img-top rounded-5"
                                alt="University Logo"
                            />
                            <div className='card-body p-2'>
                                <p className="card-text text-center">Universitas Multimedia Nusantara</p>
                                <img id="logo-sk"src='/Image/logo-umn.png'/>
                                <p className='card-text'><b>Computer Engineering</b></p>
                                <p className='card-text mt-1'><br/><b>Communication | Web Development | IoT</b></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}