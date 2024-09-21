export interface ISelectOption {
	label: string
	value: string | number | boolean | undefined | null
}

export enum AlertEnum {
	SUCCESS = 'success',
	ERROR = 'error',
	WARNING = 'warning',
	INFO = 'info'
}

export enum AlertPositionEnum {
	TOP = 'top',
	LEFT = 'left',
	RIGHT = 'right',
	BOTTOM = 'bottom'
}

export enum AlertCustomEnum {
	SUCCESS = 'alert-color-success',
	ERROR = 'alert-color-error',
	WARNING = 'alert-color-warning',
	INFO = 'alert-color-info'
}

export enum AlertMessageEnum {
	SUCCESS = 'İşlem başarıyla tamamlandı!',
	ERROR = 'Bir hata oluştu, lütfen tekrar deneyin!',
	WARNING = 'Eksik bilgi, lütfen gerekli alanları doldurun!',
	INFO = 'Bilgilendirme: Lütfen dikkat edin!'
}
