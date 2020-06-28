import React from 'react'
import { Link } from 'react-router-dom'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

import logo from '../../assets/logo.png'
import './style.css'

export default class Reclamer extends React.Component {


    render() {
        return (
            <div>
                <Link to="/landing">
                    <h5 style={{}}>  &larr; Retourner</h5>
                </Link>

                <Link to="/collaborateur/VoirTickets">
                    <h5 style={{ position: "fixed", color: "grey", right: "20px", top: "10px" }} className="go-to-my-tickets">  Consulter Mes tickets</h5>
                </Link>

                <a href="http://www.wifakbank.com/" style={{ position: "fixed", left: "20px", top: "10%" }}>
                    <img src={logo} alt="Logo" />
                </a>
                <Form>
                    <div style={{ display: "flex", justifyContent: "center", paddingTop: "10%", backgroundColor: "#88888887", position: "relative" }}>
                        <h5 style={{ position: "absolute", top: "10px", left: "20%", color: "#ad2d07" }}>   Saisir une réclamation</h5>
                        <FormGroup >
                            <Label for="exampleSearch" style={{ color: "#bb1a2b" }}>Matricule</Label>
                            <Input
                                type="search"
                                name="search"
                                id="matricule"
                                placeholder="Matricule"
                                required
                            />
                        </FormGroup>
                        <FormGroup >
                            <Label for="exampleSearch" style={{ color: "#bb1a2b" }}>Reférant</Label>
                            <Input
                                type="search"
                                name="search"
                                id="referant"
                                placeholder="Reférant"
                            />
                        </FormGroup>
                    </div>

                    <div style={{ padding: "0 20%" }}>
                        <FormGroup>
                            <Label for="exampleSelect" style={{ color: "#0f5098" }}>Element</Label>
                            <Input type="select" name="select" id="exampleSelect-Element" required>
                                <option>Absence agence de sécurité</option>
                                <option>Accés interdit</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Input>
                        </FormGroup>
                    </div>

                    <div style={{ padding: "0 20%" }}>
                        <FormGroup>
                            <Label for="exampleSelect" style={{ color: "#0f5098" }}>Catégorie</Label>
                            <Input type="select" name="select" id="exampleSelect-catégorie" required>
                                <option>Fonctionnel</option>
                                <option>Direction</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Input>
                        </FormGroup>
                    </div>

                    <div style={{ padding: "0 20%" }}>
                        <FormGroup>
                            <Label for="exampleText" style={{ color: "#0f5098" }}>Description</Label>
                            <Input type="textarea" name="text" id="exampleText" required />
                        </FormGroup>
                    </div>

                    <div style={{ padding: "0 20%", float: "right" }}>
                        <Button color="success" type="submit">Créer</Button>{' '}
                    </div>

                </Form>
            </div>
        )
    }
}