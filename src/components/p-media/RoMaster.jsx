import React from 'react'

export const RoMaster = () => {
    return (
        <div>
            <div className="container mt-4">
                <h4 className="mb-4">Press-Media RO Master</h4>
                <form>
                    <div className="row g-3">
                        <div className="col-md-3">
                            <label htmlFor="roNo" className="">R. O. No</label>
                            <div className="input-group">
                                <input type="text" id="roNo" className="form-control" />
                                <button className="btn btn-outline-secondary" type="button">?</button>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="roDate" className="">R. O. Date</label>
                            <input type="date" id="roDate" className="form-control" />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="mediaBillNo" className="">Media Bill No</label>
                            <input type="text" id="mediaBillNo" className="form-control" />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="mediaBillAmount" className="">Media Bill Amount</label>
                            <input type="text" id="mediaBillAmount" className="form-control" />
                        </div>

                        <div className="col-lg-12">
                            <div className="col-lg-6">
                                <label htmlFor="client" className="">Client</label>
                                <select id="client" className="form-select">
                                    <option value="">Select</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <label htmlFor="newspaper" className="">Newspaper</label>
                            <select id="newspaper" className="form-select">
                                <option value="">Select</option>
                            </select>
                        </div>
                        <div className="col-lg-6">
                            <label htmlFor="editions" className="">Editions</label>
                            <input type="text" id="editions" className="form-control" />
                        </div>

                        <div className="col-lg-12 mt-4">
                            <div class="row">
                                <div class="col-1 d-flex align-items-center mt-4">
                                    <label htmlFor="scheme" className=" text-dark fw-bold">Scheme</label>
                                </div>
                                <div class="col-2">
                                    <label htmlFor="scheme" className="">No of Paid Days</label>
                                    <input type="text" class="form-control" />
                                </div>
                                <div class="col-2">
                                    <label htmlFor="scheme" className="">No of Free Days</label>
                                    <input type="text" class="form-control" />
                                </div>
                                <div class="col-3 d-flex align-items-center mt-3">
                                    <label htmlFor="scheme" className="fw-bold text-dark ms-5">Cash & Carry Commision</label>
                                </div>
                                <div class="col-2">
                                    <label htmlFor="scheme" className="">CC is Available</label>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>No</option>
                                        <option value="1">Yes</option>
                                    </select>
                                </div>
                                <div class="col-2">
                                    <label htmlFor="scheme" className="">CC Percentage</label>
                                    <input type="text" class="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 mt-4">
                            <div className="row">
                                <div className="col-md-3">
                                    <label htmlFor="gstTaxType" className="">GST Tax Type</label>
                                    <select id="gstTaxType" className="form-select">
                                        <option value="">Select</option>
                                    </select>
                                </div>
                                <div className="col-md-2 text-center">
                                    <label htmlFor="cgst" className="">CGST%</label>
                                    <input type="text" id="cgst" className="form-control" placeholder='0.00'/>
                                </div>
                                <div className="col-md-2 text-center">
                                    <label htmlFor="sgst" className="">SGST%</label>
                                    <input type="text" id="sgst" className="form-control" placeholder='0.00'/>
                                </div>
                                <div className="col-md-2 text-center">
                                    <label htmlFor="igst" className="">IGST%</label>
                                    <input type="text" id="igst" className="form-control" placeholder='0.00'/>
                                </div>
                                <div className="col-md-3 align-self-end">
                                    <button type="button" className="btn btn-primary w-100">Show Details Form</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
<br />
            <hr /><hr />
            <div className="container">
                <form>
                    <div className="row g-3 mt-4">
                        <div className="col-md-2">
                            <label htmlFor="roTotal" className="">RO Total</label>
                            <input type="text" id="roTotal" className="form-control" placeholder='RO Total' readOnly />
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="commissionTotal" className="">Commission Total</label>
                            <input type="text" id="commissionTotal" className="form-control" placeholder='Commission Total' readOnly />
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="cgstTotal" className="">CGST Total</label>
                            <input type="text" id="cgstTotal" className="form-control" placeholder='CGST' readOnly />
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="sgstTotal" className="">SGST Total</label>
                            <input type="text" id="sgstTotal" className="form-control" placeholder='SGST' readOnly />
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="igstTotal" className="">IGST Total</label>
                            <input type="text" id="igstTotal" className="form-control" placeholder='IGST' readOnly />
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="gstTotal" className="">GST Total</label>
                            <input type="text" id="gstTotal" className="form-control" placeholder='GST' readOnly />
                        </div>
                    </div>

                    <div className="row g-3 mt-4">
                        <div className="col-md-2">
                            <label htmlFor="ccAmount" className="">C & C Amount</label>
                            <input type="text" id="ccAmount" className="form-control" placeholder='C & C Amount' readOnly />
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="roBillAmount" className="">RO Bill Amount</label>
                            <input type="text" id="roBillAmount" className="form-control" placeholder='Amount to Pay' readOnly />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="bankName" className="">Bank Name</label>
                            <input type="text" id="bankName" className="form-control" />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="instructions" className="">Instructions</label>
                            <input type="text" id="instructions" className="form-control" />
                        </div>
                    </div>

                    <div className="mt-4 text-center">
                        <button type="button" className="btn btn-primary me-3">Save</button>
                        <button type="button" className="btn btn-danger">Cancel</button>
                    </div>
                </form>
            </div>
        </div >
    )
}
