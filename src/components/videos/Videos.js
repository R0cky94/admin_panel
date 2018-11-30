import React, {Component} from 'react'
import './Videos.css';
import {Card, Col, Row, View, Mask, CardImage, CardBody, CardTitle, CardText, CardFooter, Button, Fa} from 'mdbreact';

class Videos extends Component {
    onInput = (e) =>{
      console.log(e.target.files[0])
    };
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col sm="12" md="6" lg="6">
                        <p className="videosTitle">Upload videos</p>
                        <Card className="apple">
                            <div className={"videoFileDiv"}>
                                <button className="upLoadButtonStyle">Upload</button>
                                <input className="inputVideoFileStyle" type="file" onChange={this.onInput}/>
                            </div>
                            <div className={"videoFileDiv"}>
                                <button className="upLoadButtonStyle">Upload</button>
                                <input className="inputVideoFileStyle" type="file"/>
                            </div>
                            <div className={"videoFileDiv"}>
                                <button className="upLoadButtonStyle">Upload</button>
                                <input className="inputVideoFileStyle" type="file"/>
                            </div>
                            <div className={"videoFileDiv"}>
                                <button className="upLoadButtonStyle">Upload</button>
                                <input className="inputVideoFileStyle" type="file"/>
                            </div>
                            <div className={"videoFileDiv"}>
                                <button className="upLoadButtonStyle">Upload</button>
                                <input className="inputVideoFileStyle" type="file"/>
                            </div>
                            <CardBody>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
};

export default Videos;