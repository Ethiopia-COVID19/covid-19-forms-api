const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MedicalFacilitySchema = new Schema(
  {
    firstName: { type: String, required: true, max: 100 },
    middleName: { type: String, max: 100 },
    lastName: { type: String, required: true, max: 100 },
    nationality: { type: String },
    email: { type: String },
    sex: { type: String },
    age: { type: Number },
    region: { type: String },
    subcity: { type: String },
    zone: { type: String },
    woreda: { type: String },
    kebele: { type: String },
    houseNumber: { type: String },
    phoneNumber: { type: String },
    occupation: { type: String },
    callDate: { type: Date },
    callerType: { type: String },
    fever: { type: Boolean },
    cough: { type: Boolean },
    headache: { type: Boolean },
    runnyNose: { type: Boolean },
    feelingUnwell: { type: Boolean },
    shortnessOfBreath: { type: Boolean },
    bodyPain: { type: Boolean },
    travelHx: { type: Boolean },
    haveSex: { type: Boolean },
    animalMarket: { type: Boolean },
    healthFacility: { type: Boolean },
    receiverName: { type: String },
    source: { type: String },
    formStatus: { type: String },
    fatigue: { type: Boolean },
    underlyingConditions: {
      chronicLungDisease: { type: Boolean },
      heartDisease: { type: Boolean },
      liverDisease: { type: Boolean },
      renalDisease: { type: Boolean },
      autoimmuneDisease: { type: Boolean },
      cancer: { type: Boolean },
      diabetes: { type: Boolean },
      hiv: { type: Boolean },
      pregnancy: { type: Boolean },
    },
  },
  {
    timestamps: true,
  }
);

// Export the model
module.exports = mongoose.model('MedicalFacility', MedicalFacilitySchema);
