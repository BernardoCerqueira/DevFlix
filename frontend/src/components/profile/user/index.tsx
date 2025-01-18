import ToastComponent from "@/components/common/toast"
import profileService from "@/services/profileService"
import styles from "@/styles/profile.module.scss"
import { useRouter } from "next/router"
import { FormEvent, useEffect, useState } from "react"
import { Button, Form, FormGroup, Input, Label } from "reactstrap"

const UserForm = function(){
    const router = useRouter()

    const [color, setColor] = useState("")
    const [toastIsOpen, setToastIsOpen] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [initialEmail, setInitialEmail] = useState(email)
    const [createdAt, setCreatedAt] = useState("")

    const allowedCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "Backspace"]

    const date = new Date(createdAt)
    const month = date.toLocaleDateString("default", {month: "2-digit"})

    useEffect(() => {
        profileService.fetchCurrent().then((user) => {
            setFirstName(user.firstName)
            setLastName(user.lastName)
            setPhone(user.phone)
            setEmail(user.email)
            setInitialEmail(user.email)
            setCreatedAt(user.createdAt)
        })
    }, [])

    const handleUserUpdate = async function (event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const res = await profileService.userUpdate({
            firstName,
            lastName,
            phone,
            email,
            created_at: createdAt
        })

        if(res === 200){
            setToastIsOpen(true)
            setErrorMessage("Informações alteradas com sucesso!")
            setColor("bg-success")

            setTimeout(() => {
                setToastIsOpen(false)
            }, 1000 * 3)

            if(email != initialEmail){
                sessionStorage.clear()
                router.push("/login")
            }
        } else{
            setToastIsOpen(true)
            setErrorMessage("E-mail inválido.")
            setColor("bg-danger")

            setTimeout(() => {
                setToastIsOpen(false)
            }, 1000 * 3)
        }
    }

    return(
        <>
            <Form onSubmit={handleUserUpdate} className={styles.form}>
                <div className={styles.formName}>
                    <p className={styles.nameAbbreviation}>
                        {firstName.slice(0, 1)}
                        {lastName.slice(0, 1)}
                    </p>
                    <p className={styles.userName}>
                        {`${firstName} ${lastName}`}
                    </p>
                </div>
                <div className={styles.memberTime}>
                    <img
                        src="/profile/iconUserAccount.svg"
                        alt="iconProfile"
                        className={styles.memberTimeImg}
                    />
                    <p className={styles.memberText}>
                        Membro desde <br />
                        {`${date.getDate()}/${month}/${date.getFullYear()}`}
                    </p>
                </div>
                <hr />
                <div className={styles.inputFlexDiv}>
                    <FormGroup>
                        <Label className={styles.label} for="firstName">
                            NOME
                        </Label>
                        <Input
                            name="firstName"
                            type="text"
                            id="firstName"
                            placeholder="Qual o seu primeiro nome?"
                            required
                            maxLength={20}
                            className={styles.inputFlex}
                            value={firstName}
                            onChange={(ev) => setFirstName(ev.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label className={styles.label} for="lastName">
                            SOBRENOME
                        </Label>
                        <Input
                            name="lastName"
                            type="text"
                            id="lastName"
                            placeholder="Qual o seu último nome?"
                            required
                            maxLength={20}
                            className={styles.inputFlex}
                            value={lastName}
                            onChange={(ev) => setLastName(ev.target.value)}
                        />
                    </FormGroup>
                </div>
                <div className={styles.inputNormalDiv}>
                    <FormGroup>
                        <Label className={styles.label} for="phone">
                            WHATSAPP / TELEGRAM
                        </Label>
                        <Input
                            name="phone"
                            type="tel"
                            id="phone"
                            placeholder="(xx) 9xxxx-xxxx"
                            data-mask="[-]+55 (00) 00000-0000"
                            required
                            className={styles.input}
                            value={phone}
                            onChange={(ev) => setPhone(ev.target.value)}
                            onKeyDown={(ev) => {
                                if(!allowedCharacters.includes(ev.key)){
                                    ev.preventDefault()
                                }
                            }}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label className={styles.label} for="email">
                            E-MAIL
                        </Label>
                        <Input
                            name="email"
                            type="email"
                            id="email"
                            placeholder="Escreva o seu e-mail principal"
                            required
                            className={styles.input}
                            value={email}
                            onChange={(ev) => setEmail(ev.target.value)}
                        />
                    </FormGroup>

                    <Button className={styles.formBtn} outline type="submit">
                        Salvar Alterações
                    </Button>
                </div>
            </Form>
            <ToastComponent
                color={color}
                isOpen={toastIsOpen}
                message={errorMessage}
            />
        </>
    )
}

export default UserForm