import React, { Component } from 'react';
import Select2 from './Select2';
import { neighbourhoodlist, budgetlist, bedslist } from '../../data/select.json';

/**
 * The enquiry form, shared by the homepage and the contact page.
 *
 * It asks for a relocation brief rather than "your message": arrival date,
 * family size and budget are what a consultant needs to reply with a real
 * shortlist, and they're the questions we'd otherwise ask on the first call.
 */
class Formbox extends Component {
    render() {
        return (
            <form method="post">
                <div className="row">
                    <div className="col-md-6 form-group">
                        <label>Full name</label>
                        <input type="text" className="form-control" placeholder="Full name" name="fname" />
                    </div>
                    <div className="col-md-6 form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="you@organisation.org" name="email" />
                    </div>
                    <div className="col-md-6 form-group">
                        <label>Organisation</label>
                        <input type="text" className="form-control" placeholder="UN agency, embassy, NGO, company" name="org" />
                    </div>
                    <div className="col-md-6 form-group">
                        <label>When do you arrive?</label>
                        <input type="text" className="form-control" placeholder="e.g. early August 2026" name="arrival" />
                    </div>
                    <div className="col-md-4 form-group acr-custom-select">
                        <label>Preferred area</label>
                        <Select2 data={neighbourhoodlist} />
                    </div>
                    <div className="col-md-4 form-group acr-custom-select">
                        <label>Budget</label>
                        <Select2 data={budgetlist} />
                    </div>
                    <div className="col-md-4 form-group acr-custom-select">
                        <label>Bedrooms</label>
                        <Select2 data={bedslist} />
                    </div>
                    <div className="col-md-12 form-group">
                        <label>Anything else we should know?</label>
                        <textarea
                            className="form-control"
                            placeholder="Children's ages and school, pets, whether you're shipping furniture, accessibility needs…"
                            name="comment"
                            rows={5}
                        />
                    </div>
                </div>
                <button type="submit" className="btn-custom primary" name="button">Send the brief</button>
            </form>
        );
    }
}

export default Formbox;
