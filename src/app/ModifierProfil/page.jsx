import React from 'react'
import Sidebar from "@components/Sidebar";
import "@assets/css/style.css";
import FeatherIcon from 'feather-icons-react/build/FeatherIcon'
import Link from 'next/link'
import { Profileuser, cameraicon, doctor, medalicon, medalicon02, medalicon03, menuicon16 } from '@components/imagepath'
const MonProfile = () => {
    return (
        <>
            
            <Sidebar activeClassName = 'doctor-setting' />
            <>
                <div className="page-wrapper">
                    <div className="content">
                        {/* Page Header */}
                        <div className="page-header">
                            <div className="row">
                                <div className="col-sm-12">
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item"><Link href="doctors.html">Medecins </Link></li>
                                        <li className="breadcrumb-item"><i className="feather-chevron-right">
                                            <FeatherIcon icon="chevron-right"/>
                                            </i>
                                        </li>
                                        <li className="breadcrumb-item active">Paramètres du profil</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* /Page Header */}
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="card">
                                    <div className="card-body">
                                        
                                            <div className="col-md-20">
                                                
                                                <div className="doctor-profile-head">
                                                   
                                                    <div className="row">
                                                        <div >
                                                            <div className="profile-user-box ">
                                                                <div  className="profile-user-img">
                                                                    <img src={Profileuser.src} alt="Profile" />
                                                                    <div className="form-group doctor-up-files profile-edit-icon mb-0">
                                                                        <div className="uplod d-flex">
                                                                            <label className="file-upload profile-upbtn mb-0">
                                                                                <img src={cameraicon.src} alt="Profile" /><input type="file" />
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="names-profiles">
                                                                    <h4>Dr. Bruce Willis</h4>
                                                                    <h5>Medecin resident</h5>
                                                                </div>
                                                                
                                                            </div>
                                                        </div>
                                                       
                                                    </div>
                                                </div>
                                            </div>
                                        
                                    </div>
                                </div>
                                <div className="row">
                                   
                                    <div className="col-lg-12">
                                        <div className="doctor-personals-grp">
                                            <div className="card">
                                                <div className="card-body">
                                                    
                                                    <div className="setting-form-blk">
                                                        <form>
                                                            <div className="row">
                                                                <div className="col-12">
                                                                    <div className="form-heading">
                                                                        <h4>Paramètres du compte</h4>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 col-sm-12">
                                                                    <div className="form-group local-forms">
                                                                        <label>Nom d'utilisateur </label>
                                                                        <input className="form-control" type="text" defaultValue="brucewillis@29" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 col-sm-12">
                                                                    <div className="form-group local-forms">
                                                                        <label>Mobile </label>
                                                                        <input className="form-control" type="text" defaultValue="+1 23 456890" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 col-sm-12">
                                                                    <div className="form-group local-forms">
                                                                        <label>Email </label>
                                                                        <input className="form-control" type="email" defaultValue="brucewillis@info.com" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 col-sm-12">
                                                                    <div className="form-group local-forms">
                                                                        <label>Adresse <span className="login-danger">*</span></label>
                                                                        <textarea className="form-control" rows={3} cols={30} defaultValue={"101, Elanxa Apartments, 340 N Madison Avenue"} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-12">
                                                                <div className="form-heading">
                                                                    <h4>Paramètres de sécurité</h4>
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-sm-12">
                                                                <div className="form-group local-forms">
                                                                    <label>Mot de passe actuel </label>
                                                                    <input className="form-control" type="password" defaultValue={12345} />
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-sm-12">
                                                                <div className="form-group local-forms">
                                                                    <label>Nouveau mot de passe </label>
                                                                    <input className="form-control" type="password" placeholder />
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-sm-12">
                                                                <div className="form-group local-forms">
                                                                    <label>Confirmer le mot de passe </label>
                                                                    <input className="form-control" type="password" placeholder />
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-sm-12">
                                                                
                                                            </div>
                                                            <div className="col-12">
                                                                <div className="doctor-submit">
                                                                    <button type="submit" className="btn btn-primary submit-form me-2">Soumettre</button>
                                                                    <button type="submit" className="btn btn-primary cancel-form">Annuler</button>
                                                                </div>
                                                            </div>
                                                        </form></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        </>
    )
}

export default MonProfile