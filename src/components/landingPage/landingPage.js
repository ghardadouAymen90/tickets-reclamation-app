import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import logo from '../../assets/logo.png'

export default class Welcome extends React.Component {
    render() {
        return (
            <div className="landing__header ">
                <div className="container container--small landing__header-container">
                    <div className="landing__header-inner">
                        <div className="landing__header-top">
                            <span id="hs_cos_wrapper_landing_logo" className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_raw_html" style={{}} data-hs-cos-general-type="widget" data-hs-cos-type="raw_html">
                                <span>
                                    <a data-reactroot="" href="http://www.wifakbank.com/" className="landing__header-logo">
                                        <img src={logo} alt="Logo" />
                                    </a>
                                </span>
                            </span>

                            <span id="hs_cos_wrapper_landing_button" className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_raw_html" style={{}} data-hs-cos-general-type="widget" data-hs-cos-type="raw_html">
                                <span>
                                    <Link to="/login" className="btn btn-default btn-transparent btn-small-font u-uppercase u-white">
                                        Help desk
                                    </Link>
                                </span>
                            </span>
                        </div>
                        
                        <div className="landing__header-content">
                            <div className="row">
                                <div className="col-xs-7">
                                    <h1 className="landing__header-title">
                                        <span id="hs_cos_wrapper_main_title" className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_rich_text" style={{}} data-hs-cos-general-type="widget" data-hs-cos-type="rich_text">
                                            Reclam
                                        </span>
                                    </h1>
                                    <p className="landing__header-subtitle">
                                        <span id="hs_cos_wrapper_main_desc" className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_rich_text" style={{}} data-hs-cos-general-type="widget" data-hs-cos-type="rich_text">
                                            Gestionnaire des réclamations et des incidents
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <Link to="/collaborateur/reclamer" className="btn btn-default btn-primary u-fs-small btn-arrow u-uppercase">
                                <span id="hs_cos_wrapper_main_button_text" className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_text" style={{}} data-hs-cos-general-type="widget" data-hs-cos-type="text">
                                    Espace collaborateurs
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}