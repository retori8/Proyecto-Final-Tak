import React from "react";

export const Statistics = () => {
    return (
        <div className="m-5">
            <div className="row">
                <div className="col-xl-3 col-sm-6 col-12">
                    <div className="card">
                        <div className="card-content">
                            <div className="card-body">
                                <div className="media d-flex">
                                    <div className="media-body text-left">
                                        <h3 className="primary">278</h3>
                                        <span>New Posts</span>
                                    </div>
                                    <div className="align-self-center">
                                        <i className="icon-book-open primary font-large-2 float-right" />
                                    </div>
                                </div>
                                <div className="progress mt-1 mb-0" style={{ height: 7 }}>
                                    <div
                                        className="progress-bar bg-primary"
                                        role="progressbar"
                                        style={{ width: "80%" }}
                                        aria-valuenow={80}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 col-12">
                    <div className="card">
                        <div className="card-content">
                            <div className="card-body">
                                <div className="media d-flex">
                                    <div className="media-body text-left">
                                        <h3 className="warning">156</h3>
                                        <span>New Comments</span>
                                    </div>
                                    <div className="align-self-center">
                                        <i className="icon-bubbles warning font-large-2 float-right" />
                                    </div>
                                </div>
                                <div className="progress mt-1 mb-0" style={{ height: 7 }}>
                                    <div
                                        className="progress-bar bg-warning"
                                        role="progressbar"
                                        style={{ width: "35%" }}
                                        aria-valuenow={35}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 col-12">
                    <div className="card">
                        <div className="card-content">
                            <div className="card-body">
                                <div className="media d-flex">
                                    <div className="media-body text-left">
                                        <h3 className="success">64.89 %</h3>
                                        <span>Bounce Rate</span>
                                    </div>
                                    <div className="align-self-center">
                                        <i className="icon-cup success font-large-2 float-right" />
                                    </div>
                                </div>
                                <div className="progress mt-1 mb-0" style={{ height: 7 }}>
                                    <div
                                        className="progress-bar bg-success"
                                        role="progressbar"
                                        style={{ width: "60%" }}
                                        aria-valuenow={60}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 col-12">
                    <div className="card">
                        <div className="card-content">
                            <div className="card-body">
                                <div className="media d-flex">
                                    <div className="media-body text-left">
                                        <h3 className="danger">423</h3>
                                        <span>Total Visits</span>
                                    </div>
                                    <div className="align-self-center">
                                        <i className="icon-direction danger font-large-2 float-right" />
                                    </div>
                                </div>
                                <div className="progress mt-1 mb-0" style={{ height: 7 }}>
                                    <div
                                        className="progress-bar bg-danger"
                                        role="progressbar"
                                        style={{ width: "40%" }}
                                        aria-valuenow={40}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};