import React from 'react'
import "./tanya-pertanyaan.css"






function JwbPertanyaanForum() {
    return (
        <div>
            
    <div class="textareaST container">
		<form class="container-fluid">
			<label class="labels fw-bold fs-1">Ajukan Pertanyaanmu</label><br/>
			<div class="textarea_style d-flex align-items-center justify-content-center">
				<textarea class="textarea fs-5" id="textarea" onkeyup="charCount();" name="textarea_description" rows="12"  minlength="10" placeholder="Tuliskan jawabanmu disini..."></textarea>
			</div>
            <div class="row">
                <div class="col">
                    <button type="button" class="btn fw-bold rounded-pill mt-3 text-white">Kirim jawaban</button>
                </div>
                <div class="col">
                    <span class="textarea_count fs-6" id="textarea_count">0/10 (Min Character 10)</span>
                </div>
            </div>
		</form>
	</div>

        </div>
    )
}

export default JwbPertanyaanForum
