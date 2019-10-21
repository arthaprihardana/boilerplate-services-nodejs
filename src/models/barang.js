/**
 * @author: Artha Prihardana 
 * @Date: 2019-06-14 10:20:38 
 * @Last Modified by: Artha Prihardana
 * @Last Modified time: 2019-06-14 16:09:24
 */
import { Schema, model } from 'mongoose';

const BarangSchema = new Schema({
    sku: {
        type: String,
        required: [true, "SKU barang harus diisi"],
        validate: {
            validator: async val => {
                let q = await BarangModel.find({ sku: val }).exec();
                return q.length === 0;
            },
            message: props => `${props.value} sudah terdaftar`
        }
    },
    nama_barang: {
        type: String,
        required: [true, "Nama barang harus diisi"],
        validate: {
            validator: async val => {
                let q = await BarangModel.find({ nama_barang: val }).exec();
                return q.length === 0;
            },
            message: props => `${props.value} sudah terdaftar`
        }
    },
    merk: {
        type: String,
        required: [true, "Merk harus diisi"]
    },
    uom: {
        type: Schema.Types.ObjectId,
        required: [true, "UOM harus diisi"]
    },
    harga: {
        type: Number,
        required: [true, "Harga barang harus diisi"]
    },
    image: {
        type: String,
        default: "default.png"
    }
}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

const BarangModel = model('barang', BarangSchema);
export default BarangModel