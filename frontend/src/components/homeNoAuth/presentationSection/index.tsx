import Link from "next/link"
import styles from "./styles.module.scss"
import {Container, Row, Col, Button} from 'reactstrap'

const PresentationSection = function (){
    return(
        <>
            <Container className="py-4">
                <Row>
                    <Col md className="d-flex flex-column justify-content-center align-items-start">
                        <p className={styles.subtitle}>ACESSO ILIMITADO</p>
                        <p className={styles.title}>
                            Tenha acesso aos melhores <br/> tutoriais de Programação
                        </p>
                        <p className={styles.description}>
                            Estude de onde estiver, a qualquer momento, e continue <br/> evoluindo como programador.
                        </p>
                        <Link href="/register" className={styles.link}>
                            <Button outline className={styles.btnCta}>
                                <p>ACESSE AGORA</p>
                                <img src="/buttonPlay.svg" alt="buttonImg" className={styles.btnImg}/>
                            </Button>
                        </Link>
                    </Col>
                    <Col md>
                        <img src="/homeNoAuth/imgPresentation.png" alt="imgIndex" className={styles.imgPresentation}/>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center pt-5">
                    <Link href="#cardsSection">
                        <img
                            src="/homeNoAuth/iconArrowDown.svg"
                            alt="arrowDown"
                            className={styles.arrowDown} 
                        />
                    </Link>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default PresentationSection