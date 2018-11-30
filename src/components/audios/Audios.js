import React from 'react';
import './audios.css';
import { Row, Col, View, Card, CardBody, Table, TableHead, TableBody } from 'mdbreact';

const Audios =  () => {
  return (
    <React.Fragment>
        <Row>
            <Col sm="12" md="6" lg="6" >
                <p className="videosTitle">Upload audios</p>
                <Card className="apple" >
                    <div className={"audioFileDiv"}>
                        <button className="upLoadButtonStyle">Upload</button>
                        <input className="inputAudioFileStyle" type="file"/>
                    </div>
                    <div className={"audioFileDiv"}>
                        <button className="upLoadButtonStyle">Upload</button>
                        <input className="inputAudioFileStyle" type="file"/>
                    </div>
                    <div className={"audioFileDiv"}>
                        <button className="upLoadButtonStyle">Upload</button>
                        <input className="inputAudioFileStyle" type="file"/>
                    </div>
                    <div className={"audioFileDiv"}>
                        <button className="upLoadButtonStyle">Upload</button>
                        <input className="inputAudioFileStyle" type="file"/>
                    </div>
                    <div className={"audioFileDiv"}>
                        <button className="upLoadButtonStyle">Upload</button>
                        <input className="inputAudioFileStyle" type="file"/>
                    </div>
                </Card>
            </Col>
        </Row>
    </React.Fragment>
  )
};

export default Audios;