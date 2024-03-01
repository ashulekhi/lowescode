import Login from "./Login"

function LoginModal() {
    return (
        <>
            <a id="modalbutton"  type="button"  data-bs-toggle="modal" data-bs-target="#loginModal"> </a>

            <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">

                        <div class="modal-body">
                            <Login modal={true} />
                        </div>

                    </div>
                </div>
            </div>

        </>

    )
}

export default LoginModal