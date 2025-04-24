import React from "react";

function RefundTickets() {
  return (
    <div class="container">
      <div class="card">
        <h5
          class="card-header"
          style={{ backgroundColor: "#E75F5D", color: "#FFFFFF" }}
        >
          Refund Tickets
        </h5>
        <div class="card-body">
          <div class="row mt-3">
            <div class="form-group col-sm-4">
              <label class="form-label">Select Event</label>
              <select class="form-select">
                <option>Select</option>
              </select>
            </div>
          </div>

          <div class="row mt-3">
            <div class="form-group col-sm-4">
              <label class="form-label">Total Purchased Tickets</label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <div class="input-group-text">#</div>
                </div>
                <input type="number" class="form-control" disabled></input>
              </div>
            </div>
            <div class="form-group col-sm-4">
              <label class="form-label">Number of Tickets Refund</label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <div class="input-group-text">#</div>
                </div>
                <input type="number" class="form-control"></input>
              </div>
            </div>
          </div>

          <div class="form-group mt-3">
            <label class="form-label">Remarks</label>
            <textarea class="form-control" rows={3}></textarea>
          </div>

          <div class="row mt-4">
            <div class="col-9"></div>
            <div class="col-2 text-end">
              <button class="btn btn-light  btn">Save Draft</button>
            </div>
            <div class="col-1">
              <button
                class="btn btn-primary btn"
                style={{ backgroundColor: "#E75F5D", borderColor: "#E75F5D" }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RefundTickets;
