import { useState } from "react";

import { X, CirclePlus, Check, AlertCircle } from "lucide-react";



export default function SaleFormModal({ isOpen, onClose, onSubmit }) {

  const [formData, setFormData] = useState({

    saleName: "",

    status: "Open",

    saleDate: "",

    amount: "",

    stage: "",

    nextActivity: ""

  });



  // validation errors

  const [errors, setErrors] = useState({});



  if (!isOpen) return null;



  const validateForm = () => {

    let newErrors = {};



    // Mandatory Fields Validation

    if (!formData.saleName.trim()) newErrors.saleName = "Sale name is required";

    if (!formData.saleDate) newErrors.saleDate = "Sale date is required";

    if (!formData.amount || parseFloat(formData.amount) <= 0) {

      newErrors.amount = "Enter a valid amount";

    }

    if (!formData.status) newErrors.status = "Status is required";

    if (!formData.stage.trim()) newErrors.stage = "Stage is required";



    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;

  };



  const handleSubmit = (e) => {

    e.preventDefault();



    if (validateForm()) {

      const formattedData = {

        ...formData,

        amount: parseFloat(formData.amount) || 0,

        saleDate: formData.saleDate.split('-').reverse().join('/'),

        nextActivity: formData.nextActivity

          ? formData.nextActivity.split('-').reverse().join('/')

          : "No activity"

      };



      onSubmit(formattedData);

      onClose();





      setErrors({});

      setFormData({

        saleName: "",

        status: "Open",

        saleDate: "",

        amount: "",

        stage: "",

        nextActivity: ""

      });

    }

  };



  const inputClasses = (fieldName) => `

    w-full border rounded-lg px-3 py-2 text-[12px] outline-none transition-all

    ${errors[fieldName]

      ? "border-red-500 bg-red-50 focus:ring-red-200"

      : "border-gray-200 focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500"

    }

  `;



  const labelClasses = "text-gray-400 font-bold uppercase text-[10px] tracking-wider mb-1 block";



  return (

    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">

      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in duration-200">



        {/* Header */}

        <div className="bg-teal-600 p-4 flex justify-between items-center text-white">

          <h2 className="text-sm font-bold flex items-center gap-2">

            <CirclePlus size={18} /> Add New Sale

          </h2>

          <button onClick={onClose} className="hover:bg-white/20 rounded-full p-1 transition-colors">

            <X size={20} />

          </button>

        </div>



        {/* form */}

        <form className="p-6 space-y-4" onSubmit={handleSubmit}>



          <div>

            <label className={labelClasses}>Sale Name</label>

            <input

              name="saleName"

              className={inputClasses("saleName")}

              value={formData.saleName}

              onChange={(e) => setFormData({ ...formData, saleName: e.target.value })}

              placeholder="e.g. 45 Components - RTS"

            />

            {errors.saleName && (

              <p className="text-red-500 text-[9px] flex items-center gap-1 mt-1 font-bold uppercase">

                <AlertCircle size={10} /> {errors.saleName}

              </p>

            )}

          </div>





          <div className="grid grid-cols-2 gap-4">

            <div>

              <label className={labelClasses}>Status</label>

              <select

                className={inputClasses("status")}

                value={formData.status}

                onChange={(e) => setFormData({ ...formData, status: e.target.value })}

              >

                <option value="Open">Open</option>

                <option value="Sold">Sold</option>

                <option value="Lost">Lost</option>

                <option value="Stalled">Stalled</option>

              </select>

            </div>

            <div>

              <label className={labelClasses}>Amount (EUR)</label>

              <input

                type="number"

                step="0.01"

                className={inputClasses("amount")}

                value={formData.amount}

                onChange={(e) => setFormData({ ...formData, amount: e.target.value })}

                placeholder="0.00"

              />

              {errors.amount && <p className="text-red-500 text-[9px] font-bold mt-1 uppercase">{errors.amount}</p>}

            </div>

          </div>





          <div className="grid grid-cols-2 gap-4">

            <div>

              <label className={labelClasses}>Sale Date</label>

              <input

                type="date"

                className={inputClasses("saleDate")}

                value={formData.saleDate}

                onChange={(e) => setFormData({ ...formData, saleDate: e.target.value })}

              />

              {errors.saleDate && <p className="text-red-500 text-[9px] font-bold mt-1 uppercase">{errors.saleDate}</p>}

            </div>

            <div>

              <label className={labelClasses}>Stage</label>

              <input

                type="text"

                className={inputClasses("stage")}

                value={formData.stage}

                onChange={(e) => setFormData({ ...formData, stage: e.target.value })}

                placeholder="e.g. Negotiation (80%)"

              />

              {errors.stage && <p className="text-red-500 text-[9px] font-bold mt-1 uppercase">{errors.stage}</p>}

            </div>

          </div>





          <div>

            <label className={labelClasses}>Next Activity Date (Optional)</label>

            <input

              type="date"

              className={inputClasses("nextActivity")}

              value={formData.nextActivity}

              onChange={(e) => setFormData({ ...formData, nextActivity: e.target.value })}

            />

          </div>





          <div className="pt-4 flex gap-3">

            <button

              type="button"

              onClick={onClose}

              className="flex-1 px-4 py-2.5 border border-gray-200 text-gray-500 font-bold rounded-lg text-[11px] uppercase tracking-wider hover:bg-gray-50 transition-colors"

            >

              Cancel

            </button>

            <button

              type="submit"

              className="flex-1 px-4 py-2.5 bg-teal-600 text-white font-bold rounded-lg text-[11px] uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-teal-700 shadow-lg shadow-teal-500/20 transition-all active:scale-95"

            >

              <Check size={14} strokeWidth={3} /> Save Sale

            </button>

          </div>

        </form>

      </div>

    </div>

  );

}