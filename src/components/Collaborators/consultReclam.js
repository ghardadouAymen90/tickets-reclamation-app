import React from 'react'
import { Link } from 'react-router-dom'
import { FormGroup, Label, Input, Button, Table, Modal, ModalBody, ModalFooter } from 'reactstrap';

import logo from '../../assets/logo.png'

export default class Consulter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hide: false,
            modal1: false,
            modal2: false
        }
    }

    showResults = () => {
        this.setState({ hide: true })
    }



    toggle1 = () => { this.setState({ modal1: !this.state.modal1 }) };
    toggle2 = () => { this.setState({ modal2: !this.state.modal2 }) };

    render() {
        return (<div>

            <Link to="/landing">
                <h5 style={{}}>  &larr; Retourner</h5>
            </Link>

            <Link to="/collaborateur/reclamer">
                <h5 style={{ position: "fixed", color: "grey", right: "20px", top: "10px" }} className="go-to-my-tickets">  Saisir une réclamation</h5>
            </Link>

            <a href="http://www.wifakbank.com/" style={{ position: "fixed", left: "20px", top: "10%" }}>
                <img src={logo} alt="Logo" />
            </a>


            <div style={{ display: "flex", justifyContent: "center", paddingTop: "10%", backgroundColor: "#88888887", position: "relative" }}>
                <h5 style={{ position: "absolute", top: "10px", left: "20%", color: "#ad2d07" }}>   Consulter les réclamations</h5>
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
                    <Label for="exampleSearch" style={{ color: "#bb1a2b" }}>Numéro ticket</Label>
                    <Input
                        type="search"
                        name="search"
                        id="num-ticket"
                        placeholder="Numéro ticket"
                        required
                    />
                </FormGroup>
            </div>
            <button onClick={this.showResults} style={{ marginLeft: "43vw", height: "30px", padding: "0 40px", marginTop: "10px", backgroundColor: "#125199", color: "white" }}>
                Rechercher
                </button>

            {this.state.hide && <Table>
                <thead>
                    <tr>
                        <th>Num ticket</th>
                        <th>Element</th>
                        <th>Catégorie</th>
                        <th>Date d'ouverture</th>
                        <th>Statut</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Application office de changes</td>
                        <td>Fonctionnel</td>
                        <td>31 MArs 000.009.0099 THURS</td>
                        <td>Ouvert</td>
                        <td><Button color='secondary' onClick={this.toggle1}>Vérifier</Button></td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Application 2</td>
                        <td>telecom</td>
                        <td>02 Feb 000.009.0099 THURS</td>
                        <td>Resolu</td>
                        <td><Button color='secondary' onClick={this.toggle2}>Vérifier</Button></td>
                    </tr>
                </tbody>

                <Modal isOpen={this.state.modal1} toggle={this.toggle1} className="" >
                    <ModalBody>
                        Descriptipn de ticket
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle1}>Confirmer la résolution</Button>{' '}
                        <Button color="secondary" onClick={this.toggle1}>Réouvrir</Button>
                    </ModalFooter>
                </Modal>


                <Modal isOpen={this.state.modal2} toggle={this.toggle2} className="my-Modal" >
                    <ModalBody>
                        Descriptipn de ticket
                    </ModalBody>
                    <ModalFooter>
                        <Button style={{ backgroundColor: "green" }} onClick={this.toggle2}>Confirmer la résolution</Button>{' '}
                        <Button color="secondary" onClick={this.toggle2}>Réouvrir</Button>
                    </ModalFooter>
                </Modal>
            </Table>}


        </div>)
    }
}