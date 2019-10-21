/**
 * @author: Artha Prihardana 
 * @Date: 2019-06-14 08:27:50 
 * @Last Modified by: Artha Prihardana
 * @Last Modified time: 2019-06-14 08:42:37
 */
import { Schema, model } from "mongoose";

const KategoriTokoSchema = new Schema({
    kode_kategori_toko: {
        type: Number,
        required: [true, 'Kode kategori toko harus diisi'],
        validate: {
            validator: async val => {
                let q = await KategoriTokoModel.find({ kode_kategori_toko: val }).exec();
                return q.length === 0;
            },
            message: props => `${props.value} sudah terdaftar`
        }
    },
    nama_kategori_toko: {
        type: String,
        required: [true, 'Nama kategori toko harus diisi'],
        validate: {
            validator: async val => {
                let q = await KategoriTokoModel.find({ nama_kategori_toko: val }).exec();
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

const KategoriTokoModel = model('kategori_toko', KategoriTokoSchema);
export default KategoriTokoModel;