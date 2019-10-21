/**
 * @author: Artha Prihardana 
 * @Date: 2019-06-14 16:12:02 
 * @Last Modified by: Artha Prihardana
 * @Last Modified time: 2019-06-14 16:15:05
 */
import { Schema, model } from "mongoose";

const StokSchema = new Schema({
    barang: {
        type: Schema.Types.ObjectId,
        ref: "barang",
        required: [true, "Nama barang harus diisi"]
    },
    stok: {
        type: Number,
        required: [true, "Jumlah stok harus diisi"]
    }
}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

const StokModel = model("stok", StokSchema);
export default StokModel;