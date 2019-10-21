/**
 * @author: Artha Prihardana 
 * @Date: 2019-06-14 08:39:42 
 * @Last Modified by: Artha Prihardana
 * @Last Modified time: 2019-06-14 08:43:06
 */
import { Schema, model } from "mongoose";

const KategoriBarangSchema = new Schema({
    kode_kategori_barang: {
        type: Number,
        required: [true, 'Kode kategori barang harus diisi'],
        validate: {
            validator: async val => {
                let q = await KategoriBarangModel.find({ kode_kategori_barang: val }).exec();
                return q.length === 0;
            },
            message: props => `${props.value} sudah terdaftar`
        }
    },
    nama_kategori_barang: {
        type: String,
        required: [true, 'Nama kategori barang harus diisi'],
        validate: {
            validator: async val => {
                let q = await KategoriBarangModel.find({ nama_kategori_barang: val }).exec();
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

const KategoriBarangModel = model('kategori_barang', KategoriBarangSchema);
export default KategoriBarangModel;