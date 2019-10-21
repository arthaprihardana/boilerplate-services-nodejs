/**
 * @author: Artha Prihardana 
 * @Date: 2019-06-14 08:20:49 
 * @Last Modified by: Artha Prihardana
 * @Last Modified time: 2019-06-14 08:35:14
 */
import { Schema, model } from "mongoose";

const ProfilTokoSchema = new Schema({
    nama_toko: {
        type: String,
        required: [true, 'Nama toko harus diisi'],
        validate: {
            validator: async val => {
                let q = await ProfileTokoModel.find({ nama_toko: val }).exec();
                return q.length === 0;
            },
            message: props => `${props.value} sudah terdaftar`
        }
    },
    kode_toko: {
        type: Number,
        required: [true, 'Kode toko harus diisi'],
        validate: {
            validator: async val => {
                let q = await ProfileTokoModel.find({ kode_toko: val }).exec();
                return q.length === 0;
            },
            message: props => `${props.value} sudah terdaftar`
        }
    },
    pemilik_toko: {
        type: String,
        required: [true, 'Pemilik toko harus diisi']
    },
    alamat_toko: {
        type: String,
        required: [true, 'Alamat toko harus diisi']
    },
    no_telp_toko: {
        type: String
    },
    email_toko: {
        type: String
    },
    website_toko: {
        type: String
    },
    koordinat_toko: {
        type: [Number],
        index: '2dsphere'
    },
    kategori_toko: {
        type: Schema.Types.ObjectId,
        ref: 'kategori_toko',
        required: [true, 'Nama toko harus diisi'],
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

const ProfileTokoModel = model('profil_toko', ProfilTokoSchema);
export default ProfileTokoModel;