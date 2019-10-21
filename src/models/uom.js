/**
 * @author: Artha Prihardana 
 * @Date: 2019-06-14 15:02:06 
 * @Last Modified by: Artha Prihardana
 * @Last Modified time: 2019-06-14 15:05:06
 */
import { Schema, model } from "mongoose";

const UomSchema = new Schema({
    kode_uom: {
        type: String,
        required: [true, "Kode UOM harus diisi"],
        validate: {
            validator: async val => {
                let q = await UomModel.find({ kode_uom: val }).exec();
                return q.length === 0;
            },
            message: props => `${props.value} sudah terdaftar`
        }
    },
    nama_uom: {
        type: String,
        required: [true, "Nama UOM harus diisi"],
        validate: {
            validator: async val => {
                let q = await UomModel.find({ nama_uom: val }).exec();
                return q.length === 0;
            },
            message: props => `${props.value} sudah terdaftar`
        }
    }
}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

const UomModel = model("uom", UomSchema);
export default UomModel;