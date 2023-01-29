import { Container } from "react-bootstrap"
import Accordion from 'react-bootstrap/Accordion';

function Ask_questions() {
    return (
        <>
            <div className="askquestions"
            // data-aos="flip-up"
            data-aos="fade-up"
     data-aos-anchor-placement="center"
            
            
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            
            data-aos-once="true"
            
            >
                <Container>

                    <div className="heading-latest-news">
                        <div className="row d-flex justify-content-center ">
                            <div className="col-12 text-center mt-5"><p>FAQ'S</p></div>
                            <div className="col-12 text-center expert-heading"><span>Frequently Asked Questions</span> </div>
                            <div className="col-auto text-center heading-latest-news-content">
                                <div className="mt-3 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore perferendis deleniti illum  necessitati voluptates ipsum, ratione dolorum veritatis minus mollitia placeat.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-between align-items-center row-cols-xxl-2 row-cols-xl-2 row-cols-lg-2 pb-5 row-cols-md-1 row-cols-sm-1" xl={1}>
                        <div className="col-auto mb-4">
                            <div className="ask-img">
                                <img src={require('./img/faq-img.jpg')} alt="" />
                            </div>
                        </div>
                        <div className="col-auto mb-4">
                            <div className="ask-content align-items-center">
                                <Accordion>
                                    <Accordion.Item eventKey="0" className="mb-2">
                                        <Accordion.Header className="border border-1 border-success"> What can I expect at the first appointment?	</Accordion.Header>
                                        <Accordion.Body>
                                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, beatae, similique vel officia laboriosam autem aperiam distinctio fugiat a repudiandae nihil quis nesciunt hic sit. Facere animi voluptate nobis asperiores quis nesciunt hic sit. Facere animi voluptate nobis ipsum dolor sit amet, consectetur adipisicing elit. Aut, beatae, similique vel officia laboriosam laboriosam autem aperiam distinctio fugiat.


                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1" className="mb-2">
                                        <Accordion.Header className="border border-1 border-success">What should I do if I miss my appointment?	</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, beatae, similique vel officia laboriosam autem aperiam distinctio fugiat a repudiandae nihil quis nesciunt hic sit. Facere animi voluptate nobis asperiores quis nesciunt hic sit. Facere animi voluptate nobis ipsum dolor sit amet, consectetur adipisicing elit. Aut, beatae, similique vel officia laboriosam laboriosam autem aperiam distinctio fugiat.


                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2" className="mb-2">
                                         <Accordion.Header className="border border-1 border-success">What is the fee for doctors if they visit home?</Accordion.Header >
                                        <Accordion.Body>
                                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, beatae, similique vel officia laboriosam autem aperiam distinctio fugiat a repudiandae nihil quis nesciunt hic sit. Facere animi voluptate nobis asperiores quis nesciunt hic sit. Facere animi voluptate nobis ipsum dolor sit amet, consectetur adipisicing elit. Aut, beatae, similique vel officia laboriosam laboriosam autem aperiam distinctio fugiat.


                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3" className="mb-2">
                                        <Accordion.Header className="border border-1 border-success"> What is an academic medical center?</Accordion.Header>
                                        <Accordion.Body>
                                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, beatae, similique vel officia laboriosam autem aperiam distinctio fugiat a repudiandae nihil quis nesciunt hic sit. Facere animi voluptate nobis asperiores quis nesciunt hic sit. Facere animi voluptate nobis ipsum dolor sit amet, consectetur adipisicing elit. Aut, beatae, similique vel officia laboriosam laboriosam autem aperiam distinctio fugiat.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4" className="mb-2">
                                        <Accordion.Header className="border border-1 border-success">How are residents supervised?</Accordion.Header>
                                        <Accordion.Body>
                                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, beatae, similique vel officia laboriosam autem aperiam distinctio fugiat a repudiandae nihil quis nesciunt hic sit. Facere animi voluptate nobis asperiores quis nesciunt hic sit. Facere animi voluptate nobis ipsum dolor sit amet, consectetur adipisicing elit. Aut, beatae, similique vel officia laboriosam laboriosam autem aperiam distinctio fugiat.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                            </div>
                        </div>
                    </div>
                </Container>

            </div>
        </>
    )
}
export default Ask_questions