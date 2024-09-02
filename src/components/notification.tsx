import { Dialog, DialogPanel } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/16/solid"

const Notification = () => {

    let open: boolean = true;

    return(
        <>
            <Dialog open={open} onClose={() => open = false } className="relative z-50 bg-slate-400">
                <div className="bg-gray-900 text-white p-4 rounded-md fixed bottom-4 right-4 flex justify-between items-center">
                    <DialogPanel className="max-w-lg space-y-2 border bg-black p-6">
                        Snackbar message!
                        <button className="text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>
                    </DialogPanel>
                </div>
            </Dialog>
        </>
    )
}

export default Notification