import { Container, Form, Input } from "reactstrap"
import styles from "./styles.module.scss"
import Link from "next/link"
import Modal from "react-modal"
import { FormEvent, useEffect, useState } from "react"
import { useRouter } from "next/router"
import profileService from "@/services/profileService"

Modal.setAppElement("#__next")

const HeaderAuth = function(){
    const router = useRouter()
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [initials, setInitials] = useState("")
    const [searchName, setSearchName] = useState("")

    const handleSearch = async(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        router.push(`search?name=${searchName}`)
        setSearchName("")
    }

    const handleSearchClick = () => {
        router.push(`search?name=${searchName}`)
        setSearchName("")
    }

    useEffect(() => {
        profileService.fetchCurrent().then((user) => {
            const firstNameInitial = user.firstName.slice(0, 1)
            const lastNameInitial = user.lastName.slice(0, 1)
            setInitials(firstNameInitial + lastNameInitial)
        })

    }, [])

    const handleOpenModal = () => {
        setModalIsOpen(true)
    }
    const handleCloseModal = () => {
        setModalIsOpen(false)
    }
    const handleLogout = () => {
        sessionStorage.clear()
        router.push("/")
    }


    return(
        <>
            <Container className={styles.nav}>
                <Link href="/home">
                    <img 
                        src="/logoOnebitflix.svg"
                        alt="logoOnebitflix"
                        className={styles.imgLogoNav}
                    />
                </Link>
                <div className="d-flex align-items-center">
                    <Form onSubmit={handleSearch}>
                        <Input
                            name="search"
                            type="search"
                            placeholder="Pesquisar"
                            className={styles.input}
                            value={searchName}
                            onChange={(event) => {
                                setSearchName(event.currentTarget.value.toLowerCase())
                            }}
                        />
                    </Form>
                    <img
                        src="/homeAuth/iconSearch.svg"
                        alt="searchIcon"
                        className={styles.searchImg}
                        onClick={handleSearchClick}
                    />
                    <p
                        className={styles.userProfile}
                        onClick={handleOpenModal}>
                            {initials}
                    </p>
                </div>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={handleCloseModal}
                    shouldCloseOnEsc={true}
                    className={styles.modal}
                    overlayClassName={styles.overlayModal}
                >
                    <Link href={"/profile"} className={styles.a}>
                        <p className={styles.modalLink}>Meus Dados</p>
                    </Link>
                    <p className={styles.modalLink} onClick={handleLogout}>Sair</p>
                </Modal>
            </Container>
        </>
    )
}

export default HeaderAuth