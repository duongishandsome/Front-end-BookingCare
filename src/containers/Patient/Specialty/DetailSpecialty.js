import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FormattedMessage } from 'react-intl';
import './DetailSpecialty.scss';
import DoctorSchedule from '../Doctor/DoctorSchedule';
import ProfileDoctor from '../Doctor/ProfileDoctor';
import DoctorExtraInfor from '../Doctor/DoctorExtraInfor';
import HomeHeader from '../../HomePage/HomeHeader';

class DetailSpecialty extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrDoctorId: [31, 27],
        };
    }

    componentDidMount() {}

    async componentDidUpdate(prevProps, prevState, snapshot) {}

    render() {
        let { arrDoctorId } = this.state;
        return (
            <>
                <HomeHeader />
                <div className="detail-specialty-container">
                    <div className="description-specialty"></div>
                    {arrDoctorId &&
                        arrDoctorId.length > 0 &&
                        arrDoctorId.map((item, index) => {
                            return (
                                <div className="each-doctor" key={index}>
                                    <div className="dt-content-left">
                                        <div className="profile-doctor">
                                            <ProfileDoctor doctorId={item} isShowDescriptionDoctor={true} />
                                        </div>
                                    </div>
                                    <div className="dt-content-right">
                                        <div className="doctor-schedule">
                                            <DoctorSchedule doctorIdFromParent={item} />
                                        </div>
                                        <div className="doctor-extra-infor">
                                            <DoctorExtraInfor doctorIdFromParent={item} />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailSpecialty);
