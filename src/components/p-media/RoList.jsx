import React, { useState } from 'react'
import { useNavigate } from 'react-router';

const RoList = () => {
    const navigate = useNavigate()
    const [isLoading, setisLoading] = useState(false)
    function handleNavigate() {
        setisLoading(true);
        setTimeout(() => {
            setisLoading(false);
            navigate('/admin/p-media/ro-list/ro-master')
        }, 3000)
    }
    return (
        <div className="container mt-4">
            <h4 className="mb-4">Press-Media RO List</h4>
            <form>
                <div className="row g-3">
                    <div className="col-lg-3">
                        <label htmlFor="status" className="form-label">
                            Status
                        </label>
                        <select id="status" className="form-select">
                            <option value="all">All</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </div>
                    <div className="col-lg-3">
                        <label htmlFor="paper" className="form-label">
                            Paper
                        </label>
                        <select id="paper" className="form-select">
                            <option value="">Select</option>
                            <option value="paper1">Paper 1</option>
                            <option value="paper2">Paper 2</option>
                        </select>
                    </div>
                    <div className="col-lg-3">
                        <label htmlFor="client" className="form-label">
                            Client
                        </label>
                        <select id="client" className="form-select">
                            <option value="">Select</option>
                            <option value="client1">Client 1</option>
                            <option value="client2">Client 2</option>
                        </select>
                    </div>
                    <div className="col-lg-3">
                        <label htmlFor="payStatus" className="form-label">
                            Pay Status
                        </label>
                        <select id="payStatus" className="form-select">
                            <option value="all">All</option>
                            <option value="paid">Paid</option>
                            <option value="unpaid">Unpaid</option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="fromDate" className="form-label">
                            From Date
                        </label>
                        <input type="date" id="fromDate" className="form-control" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="toDate" className="form-label">
                            To Date
                        </label>
                        <input type="date" id="toDate" className="form-control" />
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="searchRO" className="form-label">
                            Search RO/Invoice No
                        </label>
                        <input
                            type="text"
                            id="searchRO"
                            className="form-control"
                            placeholder="Enter RO/Invoice No"
                        />
                    </div>
                    <div className="mt-5 col-lg-4 ">
                        <div className="d-flex d-flex align-item-center justify-content-end">
                            <button type="button" className="btn btn-primary me-2">
                                Show
                            </button>
                            <button type="reset" className="btn btn-danger me-2">
                                Reset
                            </button>
                            {
                                (isLoading) ? (<button class="btn btn-primary" type="button" disabled>
                                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    <span class="visually-hidden">Loading...</span>
                                </button>) : (<button type="button" className="btn btn-success" onClick={handleNavigate}>
                                    Add New RO
                                </button>)
                            }
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default RoList